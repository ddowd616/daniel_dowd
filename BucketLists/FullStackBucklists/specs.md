Consume APIs (third party = THEY)
1) THEY decide on endpoints
2) THEY decide how data will be sent- JSON or XML
3) THEY decide how much data to send
4) THEY decide what the data will look like - structure

Building (serving) APIs - US
1) WE decide on endpoints
2) WE decide how data will be sent- JSON or XML
3) WE decide how much data to send
4) WE decide what the data will look like - structure

CRUD functional app!!!(but we are going to do RCUD)
NOTE: Verbs and routes
Create - POST
Read - GET
Update - PUT
Delete - DELETE
Need four route handlers at a minimum

ETHAN (da Boss) says:
1) Whatever you send back it must be JSON
2) Only allowed 2 endpoints:
   1) /api/bucket
   2) /api/bucket/<id>

READ
1) WE decide on endpoints - GET if we want all the data use: /api/bucket
2) WE decide how data will be sent- JSON based off criteria 1
3) WE decide how much data to send -  send back everything
4) WE decide what the data will look like - structure - array of objects
Example Data (its an object)
{
id:1,
decription:"llllajlkajlkja",
isComplete:false
}
CREATE
1) endpoint - POST /api/bucket
2) JSON
3) ONE Thing - "receipt" from the Db
4) Return ONE object
UPDATE
1) endpoint - PUT /api/bucket/<id>
2) JSON
3) ONE Thing - "receipt" from the Db
4) Return ONE object (the updated object)
DELETE
1) endpoint - DELETE /api/bucket/<id>
2) JSON
3) ONE Thing - "receipt" from the Db
4) Return ONE object (the updated object)