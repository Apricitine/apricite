import { defineNitroConfig } from "nitropack";

/** 
 * Firebase preset should be a fully standard feature of Nitro, but partial
 * hydration doesn't work without Firebase Cloud Functions to respond to hydration
 * invocations. It might work if the target property in nuxt.config.ts is set to 'static',
 * letting Firebase realize that the app doesn't need to be watched for injection requests.
**/

export default defineNitroConfig({
  preset: 'firebase'
});
