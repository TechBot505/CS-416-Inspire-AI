# Inspire AI: Content Generator
Inspire AI is a modern content generation platform designed to revolutionize how you create content. Leveraging advanced AI capabilities, Inspire AI offers over 30+ customizable templates tailored to meet all your content needs. Whether you're drafting a blog post, generating social media content, or even writing code, Inspire AI has you covered. The platform is available in both free and premium tiers, ensuring that you have the flexibility to choose the features that best suit your requirements.

![Screenshot (564)](https://github.com/user-attachments/assets/529d8fbd-1bfe-487b-9c14-277ccc9c151f)

## Table of Contents
* Features
* Tech Stack
* Installation
* Usage
* Contributions
* License

## Features

### 1. Templates for All Types of Content
Inspire AI provides a vast library of over 30+ templates, including:

* Blog Titles & Content
* YouTube Descriptions
* Instagram Post Ideas
* Code Generation, Explanation, and Debugger
  
 _Free Plan_: Access 20 templates with **10,000 credits** and unlimited downloads and copies.  
 _Premium Plan_: Unlock all **50+ templates**, 100,000 credits and a premium resume generator.

 
![Frontineter](https://github.com/user-attachments/assets/141e226f-df28-4d95-ad97-e5f92d55459f)

 ### 2. Fast Responses with Gemini
Experience lightning-fast AI responses, powered by the cutting-edge Gemini API, ensuring your content is generated quickly and accurately.

### 3. Rich Text Editor with Markdown Support
Modify AI-generated content directly within the platform using a rich text editor that supports all essential features, including Markdown. Perfect for making quick edits before copying or downloading your content.
![Editor](https://github.com/user-attachments/assets/b420fde5-90bb-4283-acaa-bb498eac1281)

### 4. History Section
Keep track of all your content generation activities with the History section. Enjoy unlimited downloads and the ability to copy past content at any time.
![History](https://github.com/user-attachments/assets/a61686a2-1efd-4a61-9053-8f327f0a0d6d)

### 5. Customizable User Profiles
Personalize your experience by customizing your user profile. Tailor the platform to your preferences and make your content generation process even smoother.
![User profile](https://github.com/user-attachments/assets/9c8a67dc-7b4d-4536-8a60-d9b13d579a5b)

### 6. Search Functionality
Quickly find the perfect template using the built-in search feature. Save time by locating the exact content template you need without sifting through the entire library.
![Screenshot 2025-04-25 210830](https://github.com/user-attachments/assets/0aceff31-9dc8-4208-a23e-14e5e7356c85)

### 7. Billing Section(Subscription and Credit Section to be implemented in second code iteration)
Easily manage your subscription through the Billing section. Upgrade to the premium plan directly within the platform to unlock additional features and templates.
![Bill](https://github.com/user-attachments/assets/f4d1e391-a1b0-4cc9-a82d-2027cdee699f)

### 8. Secure Authentication with Clerk
Inspire AI uses Clerk for seamless and secure user authentication. Sign up and log in effortlessly, knowing your data is protected.
![Sign in](https://github.com/user-attachments/assets/a6a7483f-c40f-4704-b5a5-371df69b673e)

### 9. Instagram Auto-Post
Automatically publish content to your Instagram account using Instagram Business API (limited to specific templates).
![autopost](https://github.com/user-attachments/assets/c24f62e8-2c7a-4858-bab9-b3b16b012386)

### 10. Image Storage with Cloudinary
Securely upload, store, and manage your content-related images with Cloudinary integration.

### 11. Database Integration
Efficiently manage user data, templates, and history via Drizzle ORM and PostgreSQL.

## Tech Stack
Inspire AI is built using a modern and robust tech stack:

* Next.js 14
* TypeScript
* Tailwind CSS
* Shadcn
* Gemini API
* Razorpay Payment Gateway
* Clerk for Authentication
* Drizzle ORM
* PostgreSQL
* TipTap + Markdown Editor
* Cloudinary
* Instagram Business API

## Installation
To set up Inspire AI locally, follow these steps:

1. **Clone the Repository**
   
   ```bash
   git clone https://github.com/yourusername/inspire-ai.git
   ```
   
2. **Navigate to the Project Directory**
   
   ```bash
   cd inspire-ai
   ```

3.** Install Dependencies**

   ```bash
   npm install
   ```

4. **Environment Variables**
   * Create a `.env.local` file in the root directory.
   * Fill in the required environment variables as outlined in `.env.local.example`.
  
5. **Run the Development Server**

   ```bash
   npm run dev
   ```
6. **Create the drizzle.config.js File**
   * Use the drizzle.config.sample.js to create your drizzle config file by replacing the `YOUR_DATABASE_URL` placeholder with actual drizzle db url.
   * Navigate to the NeonDb console and create your project under drizzle, then copy the db connection string and use it.

6. **Run the Drizzle Orm Local Databse and Push your schemas into Neon Db**

   ```bash
   npm run db:push
   npm run db:studio
   ```

## Usage
Once set up, navigate to `http://localhost:3000` in your browser to start using Inspire AI. You can explore templates, generate content, and manage your profile and billing through the intuitive user interface.


