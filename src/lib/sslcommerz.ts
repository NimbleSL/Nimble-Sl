// SSLCommerz config. Set these in the environment (never commit credentials):
//   SSLCOMMERZ_STORE_ID, SSLCOMMERZ_STORE_PASSWORD, SSLCOMMERZ_IS_LIVE=true|false
export function getSslCommerzConfig() {
  const storeId = process.env.SSLCOMMERZ_STORE_ID;
  const storePassword = process.env.SSLCOMMERZ_STORE_PASSWORD;
  if (!storeId || !storePassword) return null;

  const baseUrl = process.env.SSLCOMMERZ_IS_LIVE === 'true'
    ? 'https://securepay.sslcommerz.com'
    : 'https://sandbox.sslcommerz.com';

  return {
    storeId,
    storePassword,
    initUrl: `${baseUrl}/gwprocess/v4/api.php`,
    validationUrl: `${baseUrl}/validator/api/validationserverAPI.php`,
  };
}
