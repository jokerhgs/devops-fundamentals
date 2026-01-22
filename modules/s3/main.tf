resource "aws_s3_bucket" "client_hosting" {
  bucket = var.bucket_name
  tags   = { Name = var.bucket_name }
}

# Create the "current/" folder
resource "aws_s3_object" "current_folder" {
  bucket       = aws_s3_bucket.client_hosting.id
  key          = "current/"
  content_type = "application/x-directory"
}

# Create the "releases/" folder
resource "aws_s3_object" "releases_folder" {
  bucket       = aws_s3_bucket.client_hosting.id
  key          = "releases/"
  content_type = "application/x-directory"
}
