resource "aws_cloudfront_distribution" "client_distribution" {
  # Primary origin configuration for the S3 bucket
  origin {
    domain_name = var.s3_bucket.bucket_regional_domain_name
    origin_id   = var.s3_bucket.id
    origin_path = "/current"
  }

  # Cache behavior specifically for the index page
  ordered_cache_behavior {
    path_pattern           = "index.html"
    target_origin_id       = var.s3_bucket.id
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"

    # This ensures that CloudFront doesn't cache the index page, so it always gets the latest version
    min_ttl     = 0
    max_ttl     = 0
    default_ttl = 0

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  # Default behavior for all other requests
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    target_origin_id       = var.s3_bucket.id

    # Cache assets for 1 day
    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  # Geographic access restrictions
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # SSL/TLS certificate settings
  viewer_certificate {
    cloudfront_default_certificate = true
  }

  enabled = true
}
