"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NotifyButton from '@/components/ui/NotifyButton';
import CountdownTimer from '@/components/ui/CountdownTimer';
import FeaturesPreview from '@/components/ui/FeaturesPreview';
import QuoteCarousel from '@/components/ui/QuoteCarousel';

// Add this constant before the Home component
const QUOTES = [
  {
    text: "Every minute spent on repetitive tasks is a minute stolen from your dreams.",
  },
  {
    text: "Automation isn't about doing more work—it's about creating more life.",
  },
  {
    text: "The most expensive currency in the world isn't Bitcoin; it's the minutes you'll never get back.",
  },
  {
    text: "A system that saves you an hour a day gives you back 15 days of life each year.",
  },
  {
    text: "Time doesn't equal money. Time equals life. Spend it accordingly.",
  },
  {
    text: "Efficiency isn't cold optimization—it's the art of creating space for what truly matters.",
  },
  {
    text: "The greatest modern luxury isn't wealth—it's having time to spend exactly as you choose.",
  },
  {
    text: "Automate the mundane to experience the extraordinary.",
  },
  {
    text: "The only wealth that can't be inherited, printed, or borrowed is time. Guard it fiercely.",
  },
  {
    text: "In the end, we won't regret the emails we didn't send or the reports we didn't format.",
  },
  {
    text: "Every shortcut that preserves your time is a direct investment in your freedom.",
  },
  {
    text: "When you say 'I don't have time,' you're actually saying 'It's not a priority.' Choose wisely.",
  },
  {
    text: "Tools work for you, or you work for them. Choose tools that multiply your time, not consume it.",
  },
  {
    text: "Time is the canvas on which you paint your life. Don't let others hold the brush.",
  },
  {
    text: "The true cost of any task isn't the money it requires, but the irreplaceable moments it demands.",
  },
  {
    text: "Procrastination is borrowing time from your future self at an impossible interest rate.",
  },
  {
    text: "If technology doesn't create more time for human connection, we're using it wrong.",
  },
  {
    text: "We cannot add hours to our days, but we can add life to our hours.",
  },
  {
    text: "When you automate the ordinary, you create space for the extraordinary.",
  },
  {
    text: "The clock ticks equally for everyone. The difference is in how intentionally we use each tick.",
  },
  {
    text: "A minute saved is more valuable than a dollar earned—you can always make another dollar.",
  },
  {
    text: "Busy and productive are distant cousins who rarely speak. Choose which one you invite into your life.",
  },
  {
    text: "Time doesn't wait for perfect systems—build 'good enough' ones today.",
  },
  {
    text: "Your life is measured in moments, not emails answered or spreadsheets completed.",
  },
  {
    text: "Time management isn't about squeezing more tasks into your day; it's about prioritizing what deserves your day.",
  },
  {
    text: "Efficiency isn't laziness in disguise—it's respect for the finite nature of your existence.",
  },
  {
    text: "An hour invested in learning automation today will return hundreds of hours tomorrow.",
  },
  {
    text: "Your daily routines are silently shaping your future. Make them work for your dreams, not against them.",
  },
  {
    text: "The most painful words at the end of life are never 'I wish I'd sent more emails.'",
  },
  {
    text: "To master time is not to control it, but to ensure it's aligned with what you value most.",
  },
  {
    text: "When technology handles what drains you, you have more energy for what fulfills you.",
  },
  {
    text: "Hope is not a strategy for finding more time. Automation is.",
  },
  {
    text: "What you repeatedly do with small pockets of time ultimately defines who you become.",
  },
  {
    text: "The greatest gift you can give yourself is freedom from tasks that machines can do better.",
  },
  {
    text: "Attention is the rarest form of generosity. Don't waste it on tasks that don't deserve it.",
  },
  {
    text: "Perfecting a system that saves you time is never wasted time.",
  },
  {
    text: "We trade life for results. Make sure the exchange rate is in your favor.",
  },
  {
    text: "Efficiency isn't about doing more things—it's about doing fewer things that waste your precious hours.",
  },
  {
    text: "When you simplify the complicated, you don't just save time—you create possibility.",
  },
  {
    text: "Time is the ultimate non-renewable resource. No sustainability plan can replenish it once spent.",
  },
  {
    text: "The art of living well begins with the science of using time wisely.",
  },
  {
    text: "What you automate defines what you elevate—choose to elevate what makes you human.",
  },
  {
    text: "Your to-do list is a claim on your life force. Audit it accordingly.",
  },
  {
    text: "Reclaiming time isn't selfish—it's the foundation of everything meaningful you'll ever create.",
  },
  {
    text: "The difference between surviving and thriving is often found in the minutes you reclaim from mundane tasks.",
  },
  {
    text: "The most valuable skill isn't doing things faster—it's eliminating the need to do them at all.",
  },
  {
    text: "Time spent creating systems that work for you is time invested in your future freedom.",
  },
  {
    text: "The quality of your life is determined by the quality of your time. Protect it like the treasure it is.",
  },
  {
    text: "Time is free, but it's priceless. You can't own it, but you can use it. You can't keep it, but you can spend it. Once you've lost it, you can never get it back.",
    description: "Harvey MacKay"
  },
  {
    text: "Lost wealth may be replaced by industry, lost knowledge by study, lost health by temperance or medicine, but lost time is gone forever.",
    description: "Samuel Smiles"
  },
  {
    text: "The key is in not spending time, but in investing it.",
    description: "Stephen R. Covey"
  },
  {
    text: "Time is money.",
    description: "Benjamin Franklin"
  },
  {
    text: "The bad news is time flies. The good news is you're the pilot.",
    description: "Michael Altshuler"
  },
  {
    text: "A man who dares to waste an hour of time has not discovered the value of life.",
    description: "Charles Darwin"
  },
  {
    text: "If I had six hours to chop down a tree, I would spend the first four hours sharpening the axe.",
    description: "Abraham Lincoln"
  },
  {
    text: "Time is the most valuable thing on earth: time to think, time to act, time to extend our fraternal relations, time to become better men, time to become better women, time to become better and more independent citizens.",
    description: "Samuel Gompers"
  },
  {
    text: "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.",
    description: "Mother Teresa"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    description: "Steve Jobs"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center">
              <h1 className="hero-title mb-6">
                Treasure You Need<br />
                Reclaim Your Life
              </h1>
              
              <p className="hero-subtitle mb-4 max-w-3xl text-base">
                We automate the mundane so you can focus on what truly matters.
              </p>
              <div className="coming-soon-wrapper mb-12">
                <div className="coming-soon-container">
                  <span className="coming-soon-text">Coming Soon</span>
                  <div className="loading-bar"></div>
                </div>
              </div>
              
              <div className="w-full max-w-md mb-16">
                <NotifyButton />
              </div>
              
              <CountdownTimer />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="w-full py-20 px-4">
          <FeaturesPreview />
        </section>
        
        {/* Quote Section */}
        <section className="w-full py-16 px-4 bg-gradient-to-r from-primary-900/50 to-secondary-900/50">
          <div className="container mx-auto max-w-4xl">
            <QuoteCarousel quotes={QUOTES} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
