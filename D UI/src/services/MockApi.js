export const mockApi = {
  success: true,
  message: "Request processed successfully",
  data: {},
  meta: {
    page: 1,
    limit: 10,
    total: 100,
  },
  timestamp: new Date().toISOString(),
};

export const getWorkerProfile = () => {
  return {
    ...mockApi,
    data: {
      id: "W-12345",
      name: "Alex Johnson",
      role: "Delivery Partner",
      riskScore: 78,
      protectedEarnings: 15420.50,
      activePolicies: [
        { id: "P-001", type: "Health Coverage", status: "Active", coverage: "$5,000", premium: "$25/mo" }
      ],
      recentClaims: [
        { id: "C-901", type: "Income Protection", status: "APPROVED", date: "2024-03-20", amount: "$450" }
      ],
      environment: {
        weather: "Cloudy",
        aqi: 45,
        location: "Mumbai, IN"
      },
      recommendations: [
        { title: "Parametric Rain Protection", description: "Heavy rain predicted for Monday. Protect your daily earnings.", urgency: "HIGH" }
      ]
    }
  };
};

export const getAdminStats = () => {
  return {
    ...mockApi,
    data: {
      totalWorkers: 12540,
      activePolicies: 8420,
      claimsToday: 42,
      fraudAlerts: 5,
      revenueData: [
        { name: "Jan", revenue: 4000 },
        { name: "Feb", revenue: 5200 },
        { name: "Mar", revenue: 4800 },
        { name: "Apr", revenue: 6100 },
        { name: "May", revenue: 5900 },
        { name: "Jun", revenue: 7400 },
      ],
      policyDistribution: [
        { name: "Health", value: 40 },
        { name: "Income", value: 30 },
        { name: "Weather", value: 20 },
        { name: "Accident", value: 10 },
      ],
      fraudQueue: [
        { id: "F-001", worker: "John Doe", riskLevel: "HIGH", reason: "Multiple claims in 24h", status: "PENDING" },
        { id: "F-002", worker: "Jane Smith", riskLevel: "MEDIUM", reason: "IP Mismatch", status: "PENDING" }
      ]
    }
  };
};
