
## Muhumuza AI

# Muhumuza AI Setup and Running Guide

## Web Access

1. **Visit the Muhumuza AI Website**
   - Open your browser and go to: [Muhumuza AI Website](https://www.muhumuza-ai.com/).

2. **Sign Up**
   - Click on the "Get Started" link.
   - Follow the prompts to sign up and express yourself to Muhumuza AI.

3. **Disclaimer**
   - Please note that responses from Huhumuza AI may take approximately 30 seconds. This response time is expected to improve over time.

## Running the Application

### 1. Clone the Application

## 2. Create a `.env` File

Create a file named `.env` in the root directory of the project.

## 3. Set Up Firebase

### Create a Firebase Service Account:

1. Go to the Firebase Console.
2. Create a new project or select an existing one.
3. Navigate to "Project Settings" > "Service Accounts".
4. Generate a new private key and download the JSON file.

### Convert Service Account JSON to Base64:

```bash
base64 path/to/your/serviceAccountKey.json
```
## 4. To the  `.env` File

Add

```env
SERVICE_ACCOUNT="base64ConvertedJsonConfig"
GOOGLE_API_KEY="ai-API-key"

NEXT_PUBLIC_APIKEY="your_api_key"
NEXT_PUBLIC_AUTHDOMAIN="your_auth_domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"
NEXT_PUBLIC_STORAGEBUCKET="your_storage_bucket"
NEXT_PUBLIC_MESSAGINGSENDERID="your_messaging_sender_id"
NEXT_PUBLIC_APPID="your_app_id"
NEXT_PUBLIC_MEASURERMENTID="your_measurement_id"
NEXT_PUBLIC_AI_PROJECT_ID="your_ai_project_id"
```
## 5. Run the Application

### Install dependencies:

```bash
npm install
```

```bash
npm run dev
```
