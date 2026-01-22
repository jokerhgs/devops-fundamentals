resource "aws_s3_bucket_policy" "client_hosting_policy" {
  bucket = var.s3_bucket.id
  policy = data.aws_iam_policy_document.s3_get_access.json
}

data "aws_iam_policy_document" "s3_get_access" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${var.s3_bucket.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [var.cloudfront_distribution.arn]
    }
  }
}
