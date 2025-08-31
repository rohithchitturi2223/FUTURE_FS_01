import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xldlnldv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await res.json();

      if (res.ok) {
        setToast("success");
        form.reset();
      } else {
        setToast("error");
      }
    } catch (error) {
      console.error("Form error:", error);
      setToast("error");
    }

    setLoading(false);
    setTimeout(() => setToast(null), 4000); // Hide toast after 4s
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-accent mb-10">Contact Me</h2>

      {/* ✅ Toast Message */}
      {toast === "success" && (
        <div className="bg-green-500 text-whiteText text-sm px-4 py-2 mb-4 rounded shadow text-center">
          ✅ Message sent successfully!
        </div>
      )}
      {toast === "error" && (
        <div className="bg-red-500 text-whiteText text-sm px-4 py-2 mb-4 rounded shadow text-center">
          ❌ Something went wrong. Please try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-card border border-glow p-8 rounded-xl shadow-md space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-md bg-background border border-glow text-whiteText placeholder-grayText"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-md bg-background border border-glow text-whiteText placeholder-grayText"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-md bg-background border border-glow text-whiteText placeholder-grayText"
        ></textarea>

        {/* ✅ Submit Button */}
        <button
          type="submit"
          className="w-full bg-accent text-background py-3 rounded-full font-semibold hover:bg-whiteText hover:text-accent transition flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
