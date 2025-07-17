Prerequisites

AWS Account (free tier is sufficient)
Node.js installed locally
Git installed
GitHub account
Basic terminal/command line knowledge

Step 1: Create Your GitHub Repository

    Go to GitHub and create a new repository
    Name it: lambda-api-cloud-intro
    Initialize with README

Step 2: Create the Lambda Function Code

    2.1 Create the Function File
    Create a file called index.js in your project root:

Step 3: Deploy to AWS Lambda
    3.1 Access AWS Console

    Go to AWS Console
    Search for "Lambda" and click on it
    Click "Create function"

    3.2 Configure the Lambda Function

    Choose "Author from scratch"
    Function name: hello-world-function
    Runtime: Node.js 18.x (or latest available)
    Architecture: x86_64
    Click "Create function"

    3.3 Upload Your Code

    In the Code tab, delete the default code
    Copy and paste your index.js code
    Click "Deploy"

    3.4 Set Environment Variables

    Go to "Configuration" tab
    Click "Environment variables" in the left sidebar
    Click "Edit"
    Add key: GREETING, value: Welcome to Cloud!
    Click "Save"

    3.5 Test the Lambda Function

    Go to "Test" tab
    Click "Create new test event"
    Use the "API Gateway AWS Proxy" template
    Name it "TestEvent"
    Click "Test"
    Check the execution results

Step 4: Create API Gateway
    4.1 Create HTTP API

    Go to API Gateway service in AWS Console
    Click "Create API"
    Choose "HTTP API" and click "Build"
    API name: hello-world-api
    Click "Next" through the routes (we'll add them later)
    Click "Next" through stages (default is fine)
    Click "Create"

    4.2 Create the Route

    In your API, go to "Routes"
    Click "Create"
    Method: GET
    Resource path: /hello
    Click "Create"

    4.3 Create Integration

    Click on your /hello route
    Click "Create and attach an integration"
    Integration type: "Lambda function"
    Lambda function: Select your hello-world-function
    Click "Create"

    4.4 Deploy the API

    Go to "Deploy" tab
    Stage: $default
    Click "Deploy"
    Note the "Invoke URL" - this is your API endpoint

Step 5: Test Your API
    5.2 Test with Postman

    Open Postman
    Create new GET request
    URL: https://YOUR_API_GATEWAY_URL/hello
    Send request
    Take screenshot of successful response

Step 6: Create Your README.md
    Create a comprehensive README with the following sections:
    
Step 7: Commit and Push
    bashgit add .
    git commit -m "Add Lambda function with API Gateway integration"
    git push origin main