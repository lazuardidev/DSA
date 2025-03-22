// hackerrank.com/test/c2p2iqio0ot/questions/gcbiqttb58g

// In each second i, a gateway receives a request from the domain request[i]. The gateway allows at most 2 successful requests from a domain within 5 seconds, and at most 5 successful requests within 30 seconds.

// Given the array requests, for each request return the string" {status: 200, message: OK}" if the request can be processed. Otherwise, return "{status: 429, message: Too many requests}".

// Example:
// Suppose n= 9 and requests = ["www.xyz.com", "www.abc.com", "www.xyz.com", "www.pqr.com", "www.abc.com", "www.xyz.com", "www.xyz.com", "www.abc.com", "www.xyz.com"]

function rateLimiter(requests) {
  const domainLogs = new Map(); // Stores timestamps for each domain
  const results = [];
  
  for (let i = 0; i < requests.length; i++) {
    const domain = requests[i];
    const currentTime = i + 1; // Assuming each request happens at time i + 1

    if (!domainLogs.has(domain)) {
      domainLogs.set(domain, []);
    }

    const timestamps = domainLogs.get(domain);
    
    // Remove outdated timestamps (older than 30s)
    while (timestamps.length > 0 && timestamps[0] <= currentTime - 30) {
      timestamps.shift();
    }

    // Count requests in the last 5s and 30s
    const last5s = timestamps.filter(t => t > currentTime - 5).length;
    const last30s = timestamps.length;

    if (last5s < 2 && last30s < 5) {
      timestamps.push(currentTime);
      results.push("{status: 200, message: OK}");
    } else {
      results.push("{status: 429, message: Too many requests}");
    }
  }

  return results;
}

// Example usage
const requests = [
  "www.xyz.com", 
  "www.abc.com", 
  "www.xyz.com", 
  "www.pqr.com",
  "www.abc.com", 
  "www.xyz.com", 
  "www.xyz.com", 
  "www.abc.com", 
  "www.xyz.com"
];

console.log(rateLimiter(requests));
