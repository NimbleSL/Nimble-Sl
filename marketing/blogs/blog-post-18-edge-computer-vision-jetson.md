```json
{
  "title": "Computer Vision at the Edge: Deploying to NVIDIA Jetson",
  "metaDescription": "Learn how to deploy real-time defect detection models on NVIDIA Jetson. A technical guide to edge computer vision optimization using TensorRT.",
  "slug": "edge-computer-vision-defect-detection-nvidia-jetson",
  "keywords": ["defect detection nvidia jetson", "edge computer vision", "tensorrt optimization", "yolov8 edge deployment", "industrial ai solutions"],
  "category": "AI/ML",
  "accent": "#F59E0B"
}
```

![Edge Computer Vision](/blog/images/blog-18-cover.png)
<!-- Midjourney Prompt: Isometric glowing neural network nodes interacting with a sleek floating glass chat widget, translucent data streams, cybernetic gold and purple neon lighting, futuristic enterprise assistant UI, octane render, high-end 3D graphics, minimal tech studio background --ar 16:9 -->

When deploying computer vision to an industrial manufacturing line, latency and reliability are the only metrics that matter. If a camera detects a micro-fracture on a high-speed conveyor belt, waiting 300 milliseconds for a cloud API response is unacceptable. The defect will have already moved past the rejection arm.

At NimbleSL, we recently partnered with a massive textile manufacturer to build a real-time fabric defect detection system. To achieve the required sub-30ms latency with zero reliance on factory internet stability, we completely bypassed the cloud and deployed our custom YOLOv8 models directly to the edge using **NVIDIA Jetson Orin Nano** modules.

In this breakdown, we detail the engineering process of taking a PyTorch computer vision model and optimizing it for real-time edge deployment.

## 📋 Table of Contents
1. [The Cloud vs. Edge Dilemma in Industrial AI](#the-cloud-vs-edge-dilemma-in-industrial-ai)
2. [Why NVIDIA Jetson?](#why-nvidia-jetson)
3. [Step 1: Training the Defect Detection Model](#step-1-training-the-defect-detection-model)
4. [Step 2: Exporting PyTorch to ONNX](#step-2-exporting-pytorch-to-onnx)
5. [Step 3: Compiling with TensorRT for Maximum FPS](#step-3-compiling-with-tensorrt-for-maximum-fps)
6. [Step 4: Real-Time Inference Architecture](#step-4-real-time-inference-architecture)
7. [Production Results](#production-results)

## The Cloud vs. Edge Dilemma in Industrial AI

Sending 60 frames per second of 4K video to an AWS server for inference requires massive bandwidth and introduces unpredictable network jitter. 

| Architecture | Latency | Bandwidth Cost | Reliability |
|---|---|---|---|
| **Cloud API Inference** | 150ms - 500ms+ | Extremely High | Vulnerable to network drops |
| **Edge Inference (Jetson)** | **12ms - 30ms** | **Zero** | 100% Local Uptime |

By moving the neural network computation directly to the physical camera hardware, we eliminate network latency entirely.

## Why NVIDIA Jetson?

The NVIDIA Jetson lineup (Nano, Orin, Xavier) are effectively miniaturized supercomputers. Unlike standard Raspberry Pi units, Jetson boards feature dedicated NVIDIA GPUs with Tensor Cores built specifically to accelerate AI workloads. 

## Step 1: Training the Defect Detection Model

We started by training a lightweight YOLOv8-Nano model using PyTorch. YOLO architectures are inherently fast, making them ideal for edge deployment.

```python
from ultralytics import YOLO

# Load a nano model for maximum edge efficiency
model = YOLO('yolov8n.pt') 

# Train on our custom textile defect dataset
results = model.train(
    data='textile-defects.yaml',
    epochs=100,
    imgsz=640,
    device=0 # Train on a cloud A100 first
)
```

> [!NOTE]  
> Never train models directly on the edge device. Training requires massive VRAM and compute. You train the model on a cloud GPU cluster (AWS EC2 / RunPod), export the optimized weights, and only run *inference* on the edge device.

## Step 2: Exporting PyTorch to ONNX

You cannot run raw PyTorch `.pt` files efficiently on a Jetson. The Jetson's hardware acceleration requires NVIDIA's TensorRT engine. To get there, we must first export the model to an intermediate format: ONNX (Open Neural Network Exchange).

```python
# Export the trained model to ONNX format
success = model.export(
    format='onnx',
    imgsz=640,
    simplify=True,
    half=True # Use FP16 precision for faster edge processing
)
# Output: best.onnx
```

## Step 3: Compiling with TensorRT for Maximum FPS

This is the most critical step. TensorRT analyzes the ONNX graph and compiles it specifically for the exact GPU architecture of the Jetson board. It fuses layers, optimizes memory allocation, and aggressively reduces precision (from FP32 to FP16 or INT8) with minimal accuracy loss.

On the Jetson device itself, run the `trtexec` tool to compile the engine:

```bash
# Run this directly on the NVIDIA Jetson terminal
/usr/src/tensorrt/bin/trtexec \
  --onnx=best.onnx \
  --saveEngine=defect_model.engine \
  --fp16 \
  --workspace=4096
```

> [!IMPORTANT]  
> TensorRT engines are highly hardware-specific. An engine compiled on a Jetson Orin will **not** work on a Jetson Xavier. You must compile the `.engine` file on the exact target hardware class.

## Step 4: Real-Time Inference Architecture

With the `.engine` file generated, we can now run real-time inference using OpenCV and the TensorRT runtime. By utilizing FP16 precision, we drastically increase the Frames Per Second (FPS).

```python
import tensorrt as trt
import pycuda.driver as cuda
import cv2

# Initialize TensorRT Logger and Runtime
logger = trt.Logger(trt.Logger.WARNING)
with open("defect_model.engine", "rb") as f, trt.Runtime(logger) as runtime:
    engine = runtime.deserialize_cuda_engine(f.read())
    
# Create execution context
context = engine.create_execution_context()

# Standard OpenCV camera loop
cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    
    # 1. Preprocess frame
    # 2. Push to GPU memory (cuda.memcpy_htod)
    # 3. Run Inference: context.execute_v2(...)
    # 4. Pull results from GPU (cuda.memcpy_dtoh)
    # 5. Trigger hardware rejection arm if defect detected
    
    if defect_detected:
        trigger_gpio_relay()
```

## Production Results

Before TensorRT optimization, running raw PyTorch on the Jetson CPU yielded a sluggish 8 FPS. 

After exporting to ONNX and compiling a TensorRT FP16 engine, we achieved **64 FPS with a 15ms inference latency**. The system could easily process the 4K high-speed camera feed, detect micro-tears in the fabric, and trigger the GPIO relay to eject the defective material without missing a single frame.

**Is your industrial AI constrained by cloud latency?** [Contact NimbleSL](/contact) to discuss how our edge engineering team can deploy highly optimized, offline-first computer vision architectures directly to your factory floor.
