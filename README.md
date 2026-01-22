## What is Terraform?
Terraform is an open-source **Infrastructure as Code (IaC)** tool created by HashiCorp. It allows you to define cloud and on-premise resources in human-readable configuration files that you can version, reuse, and share. 

Unlike manual management ("ClickOps"), Terraform provides a consistent workflow to provision and manage all your infrastructure throughout its lifecycle.

## Key Concepts
- **Declarative Syntax**: You describe *what* you want (the desired state), and Terraform figures out *how* to achieve it.
- **Providers**: Plugins that allow Terraform to interact with cloud platforms (e.g., the AWS Provider used here).
- **State**: Terraform tracks the infrastructure it manages in a state file (`terraform.tfstate`), acting as the source of truth for your environment.
- **Modules**: Reusable containers for multiple resources that are used together (like the `s3` and `cloudfront` folders in this project).

## Why Terraform?
- **Infrastructure as Code**: Manage infrastructure through version-controlled code.
- **Multi-Cloud**: Deploy resources across multiple providers (AWS, Azure, Google Cloud, etc.) with a consistent workflow.
- **Automation**: Automate the creation, modification, and destruction of infrastructure, reducing manual errors.

## Project Overview
This project provisions a **secure static website hosting solution** on AWS using Terraform.

### Architecture
- **S3 Bucket** (`modules/s3`): Stores the website content.
  - Organized into `current/` (active deployment) and `releases/` (deploy history).
- **CloudFront** (`modules/cloudfront`): Delivers content globally with low latency.
  - Caching optimized: `index.html` is never cached to ensure instant updates, while assets are cached for 24 hours.
  - SSL/TLS enabled by default.
- **IAM Security** (`modules/iam`): Enforces least privilege access.
  - Uses an **S3 Bucket Policy** to ensure content can *only* be accessed via CloudFront (preventing direct public S3 access).

