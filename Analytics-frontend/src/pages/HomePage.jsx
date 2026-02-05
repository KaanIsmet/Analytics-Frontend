import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/StockLogo.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <img
            src={logo}
            alt="Stock Nest"
            className="mx-auto mb-6 h-24 w-24 animate-fade-in opacity-90"
          />
          <h1
            className="mb-6 animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Smarter stock analytics.
            <span className="block text-white">Simpler decisions.</span>
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg text-white/90"
            style={{ animationDelay: "200ms" }}
          >
            Track portfolios, analyze trends, and get real-time market insights
            in one powerful dashboard.
          </p>
          <div
            className="flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              to="/login"
              className="w-full rounded-full bg-cyan-400 px-8 py-4 font-semibold text-gray-900 transition hover:bg-cyan-300 sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              to="/registration"
              className="w-full rounded-full border-2 border-white/60 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-white/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 animate-fade-in-up text-center text-3xl font-bold text-white sm:text-4xl">
            Everything you need to trade with confidence
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Real-Time Quotes"
              description="Live stock prices and market data updated every second. Never miss a move."
              icon="📈"
            />
            <FeatureCard
              title="Portfolio Analytics"
              description="Track performance, diversification, and risk with intuitive visualizations."
              icon="📊"
            />
            <FeatureCard
              title="AI-Powered Insights"
              description="Get pattern recognition and trend forecasts to inform your strategy."
              icon="🤖"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-white/20 px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-12 text-center">
          <StatItem value="10M+" label="Trades Analyzed" delay="0ms" />
          <StatItem value="50K+" label="Active Users" delay="100ms" />
          <StatItem value="99.9%" label="Uptime" delay="200ms" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/20 px-6 py-20">
        <div className="mx-auto max-w-3xl animate-fade-in-up rounded-2xl bg-white/10 px-8 py-12 text-center backdrop-blur-sm transition hover:bg-white/15">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Ready to take control of your investments?
          </h2>
          <p className="mb-8 text-white/90">
            Join thousands of traders who use Stock Nest to make smarter
            decisions.
          </p>
          <Link
            to="/registration"
            className="inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-gray-900 transition hover:bg-cyan-300"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="animate-fade-in-up rounded-xl bg-white/10 p-6 backdrop-blur-sm transition hover:scale-105 hover:bg-white/15">
      <span className="mb-4 block text-4xl">{icon}</span>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}

function StatItem({ value, label, delay = "0ms" }) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="text-3xl font-bold text-cyan-400 sm:text-4xl">{value}</div>
      <div className="text-sm font-medium text-white/80">{label}</div>
    </div>
  );
}
