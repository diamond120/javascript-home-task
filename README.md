# Flight Path Tracker API

## Overview

This microservice API helps track a person’s flight path by sorting a list of flights based on source and destination airport codes.

## API Endpoint

### POST /calculate

#### Request

- Content-Type: application/json
- Body:
  ```json
  [["IND", "EWR"], ["SFO", "ATL"], ["GSO", "IND"], ["ATL", "GSO"]]
- Response:
    ```json
  [["SFO", "EWR"]]