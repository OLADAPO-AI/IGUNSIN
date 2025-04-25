import React from 'react'

export default function Donate() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Support Our Cause
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Help us empower youth through education, innovation, and community
          development. Your donation makes a big impact.
        </p>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ways to Donate
          </h2>

          <div className="space-y-4 text-left text-gray-700">
            <div>
              <strong>Bank Transfer:</strong>
              <br />
              IGUNSIN YOUTH FORUM
              <br />
              Account No: 1234567890
              <br />
              Bank: GTBank
            </div>

            <div>
              <strong>Paystack / Online:</strong>
              <br />
              <a
                href="https://paystack.com/pay/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Click here to donate online
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
