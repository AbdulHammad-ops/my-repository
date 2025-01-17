import React from 'react'

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Usage data and preferences</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use the collected information to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain our service</li>
          <li>Improve and personalize user experience</li>
          <li>Communicate with you about updates and changes</li>
          <li>Ensure security and prevent fraud</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, 
          alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
            contact@example.com
          </a>
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  )
}

export default Privacy