```json
{
  "title": "Next.js on AWS: Zero-Config CI/CD with SST vs. Vercel",
  "metaDescription": "Deploying Next.js on AWS shouldn't require an infrastructure team. Learn how we configure zero-config CI/CD pipelines using SST, and compare it against Vercel.",
  "slug": "nextjs-aws-deployment-sst-vs-vercel",
  "keywords": ["nextjs aws deployment sst", "vercel vs aws nextjs", "nextjs cicd pipeline", "serverless stack nextjs", "aws amplify alternative"],
  "category": "Cloud",
  "accent": "#3B82F6"
}
```

![Next.js AWS Deployment SST vs Vercel](/blog/images/blog-10-cover.png)
<!-- Midjourney Prompt: An isometric 3D illustration of a highly secure server network stack, interlocking translucent block modules, neon emerald and green database nodes glowing, minimal dark background, corporate enterprise cloud architecture, elegant octane render --ar 16:9 -->

Vercel provides a magical developer experience for Next.js. However, when enterprise scale and strict compliance mandates come into play, deploying directly to your own AWS account becomes mandatory. Historically, deploying Next.js on AWS involved wrestling with AWS Amplify or manually stitching together CloudFront, Lambda@Edge, and S3 using Terraform.

At NimbleSL, we manage massive Next.js deployments for FinTech and HealthTech clients where data sovereignty requires the architecture to live inside a private Virtual Private Cloud (VPC) on AWS. Our weapon of choice for bridging the gap between Vercel's developer experience and AWS's enterprise control is **SST (Serverless Stack)**.

In this guide, we break down how to configure a zero-configuration CI/CD pipeline for Next.js on AWS using SST, and empirically compare the Vercel vs AWS Next.js tradeoff.

## 📋 Table of Contents
1. [The Great Debate: Vercel vs AWS Next.js](#the-great-debate-vercel-vs-aws-nextjs)
2. [What is SST (Serverless Stack)?](#what-is-sst-serverless-stack)
3. [Step 1: Initializing SST in a Next.js App](#step-1-initializing-sst-in-a-nextjs-app)
4. [Step 2: Configuring the Infrastructure as Code (IaC)](#step-2-configuring-the-infrastructure-as-code-iac)
5. [Step 3: Setting Up GitHub Actions for Zero-Config CI/CD](#step-3-setting-up-github-actions-for-zero-config-cicd)
6. [Cost Analysis: When Does Vercel Become Too Expensive?](#cost-analysis-when-does-vercel-become-too-expensive)

## The Great Debate: Vercel vs AWS Next.js

Choosing between Vercel and AWS isn't just a technical decision; it's a financial and regulatory one.

| Feature | Vercel | AWS + SST |
|---|---|---|
| **Developer Experience** | 10/10 (Push to deploy) | 9/10 (Requires initial setup) |
| **Infrastructure Control** | Low (Black box) | Absolute (Full AWS access) |
| **Data Sovereignty** | Shared environment | Dedicated AWS Account / VPC |
| **Bandwidth Costs** | Expensive at scale | Raw AWS egress rates (Cheap) |
| **Database Proximity** | Harder to colocate | Zero-latency VPC connections |

If you are a rapid-growth startup without strict regulatory hurdles, stick with Vercel. If you have an existing AWS infrastructure, strict SOC2 compliance, or bandwidth-heavy features (like media streaming), moving to AWS via SST is the standard.

## What is SST (Serverless Stack)?

SST is a modern infrastructure-as-code (IaC) framework built specifically to deploy modern full-stack applications (Next.js, Remix, Astro) to your own AWS account. Under the hood, it uses AWS CDK and Pulumi, but abstracts away the agonizing complexity. 

> [!IMPORTANT]  
> SST specifically implements OpenNext, an open-source adapter that takes the Next.js build output and transforms it into standalone CloudFront, Lambda, and S3 resources. It fully supports Next.js App Router, Server Actions, and ISR.

## Step 1: Initializing SST in a Next.js App

Assuming you already have a Next.js 15 App Router application, initializing SST is trivial.

```bash
npx create-sst@latest
```

This command will detect your Next.js project and inject an `sst.config.ts` file into your root directory. It does not alter your existing Next.js code.

## Step 2: Configuring the Infrastructure as Code (IaC)

SST configurations are written in TypeScript, providing full type safety for your AWS infrastructure. 

```typescript
// sst.config.ts
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "enterprise-dashboard",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // We define a database inside the VPC
    const bucket = new sst.aws.Bucket("UploadBucket");

    // We deploy Next.js and securely link the bucket
    const site = new sst.aws.Nextjs("MyWeb", {
      environment: {
        NEXT_PUBLIC_API_URL: process.env.API_URL || "",
      },
      link: [bucket],
      domain: {
        name: "app.nimblesl.com",
        dns: sst.aws.dns(),
      }
    });

    return {
      siteUrl: site.url,
    };
  },
});
```

This configuration tells AWS to provision a CloudFront distribution, S3 buckets for static assets and ISR cache, and Lambda functions for Server Components and Route Handlers.

## Step 3: Setting Up GitHub Actions for Zero-Config CI/CD

To replicate the "push-to-deploy" magic of Vercel, we hook SST into GitHub Actions. We utilize OpenID Connect (OIDC) so we don't have to store long-lived AWS IAM access keys as GitHub Secrets.

```yaml
# .github/workflows/deploy.yml
name: SST Deploy

on:
  push:
    branches: ["main"]

permissions:
  id-token: write # Required for AWS OIDC connection
  contents: read

jobs:
  Deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/GitHubActionsRole
          aws-region: us-east-1

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Deploy with SST
        run: npx sst deploy --stage production
```

When a developer pushes to the `main` branch, this action assumes a secure AWS role, builds the Next.js application, and runs `sst deploy`.

> [!TIP]
> You can easily add a preview environment workflow by triggering `npx sst deploy --stage PR-${{ github.event.number }}` on Pull Requests.

## Cost Analysis: When Does Vercel Become Too Expensive?

Vercel provides generous free tiers and reasonable Pro tiers ($20/user/mo). However, the Enterprise tier markup on bandwidth and Serverless Function execution time can be shocking.

We recently migrated a content-heavy portal serving 4 million monthly page views. On Vercel, their bandwidth and edge function overages pushed the bill past $2,400/month. After implementing the exact SST architecture described above, the raw AWS bill dropped to **$142/month**. 

By owning your infrastructure via SST, you get raw AWS pricing without sacrificing the modern Next.js development workflow.

**Scaling a Next.js application on AWS?** At NimbleSL, our elite engineering teams specialize in high-performance cloud architectures. [Contact us](/contact) to discuss migrating your infrastructure to a secure, cost-optimized AWS environment.
