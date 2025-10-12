import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We'll reach out to ${formData.email} soon.`);
    setFormData({ name: "", email: "" });
  };

  return (
    <div
  className="min-vh-100 d-flex flex-column justify-content-center align-items-start px-4 px-md-5 bg-light"
  style={{
    background: "linear-gradient(135deg, #f8f9fa 60%, #e9ecef 40%)",
  }}
>
  <div style={{ maxWidth: "600px" }}>
    <h1 className="fw-bold mb-2 text-brand">Contact Us</h1>
    <p className="text-muted mb-4">
      We'd love to hear from you! Fill in your details below and we’ll get back to you soon.
      We work from Monday till Friday from 8:00 a.m. to 5:30 p.m.
    </p>

    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="form-label fw-semibold">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control form-control-lg rounded-3"
          placeholder="Your name (or Organization)"
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-semibold">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control form-control-lg rounded-3 "
          placeholder="you@example.com"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-lg px-3 rounded-3 fw-semibold"
        style={{ backgroundColor: "#0F3460", border: "none" }}
      >
        Submit
      </button>
    </form>
  </div>
</div>
  );
}