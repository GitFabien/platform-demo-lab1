What changed?
This PR adds a new GET /version endpoint to the service and includes a test covering the response.

Why?
The application needs a simple version endpoint for observability and deployment validation. This matches the task requirements and provides a stable API contract for clients and automation.

Testing?
[ ] Ran the project test suite with npm test
[ ] Verified the /version endpoint responds with the expected JSON payload
[ ] Confirmed the response uses the correct service name and version

Risks?
Low risk: this is a small additive API change.
No existing routes are modified; the new endpoint is isolated to /version.
There is minimal operational impact beyond exposing the version metadata.

Checklist
[ ] Feature implemented
[ ] Test added
[ ] Existing behavior checked
[ ] Documentation not required for this change
[ ] Ready for review
