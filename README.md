# ShieldPay – AI Insurance for Delivery Workers

## Problem Statement
India has millions of gig delivery workers working for platforms like Swiggy, Zomato, Amazon, and Zepto. Their income depends on daily deliveries.

However, many external disruptions stop them from working such as:

- Heavy rain  
- Extreme heat  
- Air pollution  
- Curfews  
- Flooded roads  

These events can reduce their income by **20–30% per month**.

Currently, delivery workers have **no insurance protection for income loss**.

**ShieldPay** provides **AI-powered parametric insurance** that automatically compensates workers when disruptions occur.

---

## Persona
**Name:** Vijay  
**Age:** 26  
**Job:** Swiggy Delivery Partner  
**City:** Hyderabad  

Vijay earns about **₹600–₹800 per day**.

---

## Problem Scenario
One day:

- Heavy rain starts  
- Delivery demand drops  
- Vijay stops working early  
- He loses **₹500 income that day**

Our system detects heavy rain and **automatically pays compensation**.

---

## Solution Overview
ShieldPay is a platform where delivery workers can:

- Register  
- Buy weekly insurance  
- AI calculates risk-based premium  
- Platform monitors disruptions  
- Automatic payout when income loss occurs  

---

## Application Workflow

### Step 1 — Worker Registration
Delivery worker signs up using:

- Phone number  
- Delivery platform  
- Work location  

### Step 2 — Risk Assessment (AI)
AI analyzes:

- Location risk  
- Weather history  
- Flood zones  
- Pollution levels  

Then calculates **risk score**.

### Step 3 — Weekly Insurance Plan
Worker chooses weekly plan.

| Plan | Weekly Premium | Coverage |
|------|---------------|----------|
| Basic | ₹25 | ₹1000 |
| Standard | ₹50 | ₹2000 |
| Premium | ₹80 | ₹4000 |

---

## Parametric Triggers
Claims are triggered automatically when certain conditions occur.

| Trigger | Condition | Source |
|--------|-----------|--------|
| Heavy Rain | Rainfall > 50mm | Weather API |
| Extreme Heat | Temperature > 45°C | Weather API |
| Severe Pollution | AQI > 400 | Pollution API |
| Flood Alert | Government warning | Disaster API |
| Traffic Block | Road closure | Traffic API |

When triggered:

- System automatically calculates income loss  
- Claim generated  
- Payout processed  

---

## AI / ML Integration

### 1. Risk Prediction
Predict disruption probability based on:

- Historical weather data  
- City zones  
- Seasonal trends  

### 2. Dynamic Premium Calculation
Workers in **high-risk zones pay slightly higher premium**.

Workers in **low-risk zones pay lower premium**.

### 3. Fraud Detection
AI detects:

- Fake GPS locations  
- Duplicate claims  
- Inactive workers claiming compensation  

---

## Fraud Detection System
Fraud prevention methods include:

- GPS location verification  
- Delivery activity validation  
- Duplicate claim detection  
- Weather data validation  

---

## Technology Stack

### Frontend
React.js (Web Application)

### Backend
Node.js 

### Database
MySQL

### AI / ML
Python  
Scikit-learn

### APIs
OpenWeather API  
Google Maps API  
Air Quality APIs  

### Payments
Razorpay Sandbox / UPI Simulator

---

## System Architecture

System Components
Worker App
|
v
Backend API
|
v
AI Risk Engine
|
v
Disruption Detection Engine (Weather & Pollution APIs)
|
v
Claim Processing System
|
v
Payment Gateway


---

## Development Plan

### Week 1–2
- Research and ideation  
- Design system architecture  
- Create UI prototypes  

### Week 3–4
- Implement registration and policy management  
- Integrate weather and disruption APIs  
- Implement premium calculation logic  

### Week 5–6
- Add fraud detection module  
- Implement automatic claim processing  
- Build analytics dashboard  

---

## Future Features

- Integration with delivery platforms like Swiggy and Zomato  
- Mobile application for delivery workers  
- AI-based income prediction and coverage recommendation  
- Multi-city expansion  
- Advanced analytics dashboard for insurers  
