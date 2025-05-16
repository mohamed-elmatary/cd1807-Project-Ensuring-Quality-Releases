param(
  [string]$workspaceId,
  [string]$workspaceKey,
  [string]$logType = "PostmanTestResults",
  [string]$filePath = "newman-summary.json"
)

$body = Get-Content -Raw -Path $filePath
$bodyLength = [Text.Encoding]::UTF8.GetByteCount($body)
$date = (Get-Date).ToUniversalTime().ToString("R")

$stringToHash = "POST`n$bodyLength`napplication/json`nx-ms-date:$date`n/api/logs"
$bytesToHash = [Text.Encoding]::UTF8.GetBytes($stringToHash)
$decodedKey = [Convert]::FromBase64String($workspaceKey)
$hmacsha256 = New-Object System.Security.Cryptography.HMACSHA256
$hmacsha256.Key = $decodedKey
$signatureBytes = $hmacsha256.ComputeHash($bytesToHash)
$signature = [Convert]::ToBase64String($signatureBytes)
$authHeader = "SharedKey ${workspaceId}:$signature"

$uri = "https://${workspaceId}.ods.opinsights.azure.com/api/logs?api-version=2016-04-01"

Invoke-RestMethod -Method Post -Uri $uri -Headers @{
    "Authorization" = $authHeader
    "Log-Type" = $logType
    "x-ms-date" = $date
    "time-generated-field" = ""
} -Body $body -ContentType "application/json"

Write-Host "✅ Sent test summary to Azure Monitor"
