"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/utils/constants';

type FormType = 'client' | 'landowner' | null;
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  landAddress: string;
  landSize: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  landAddress: '',
  landSize: '',
};

const DualContactForm: React.FC = () => {
  const [selectedType, setSelectedType] = useState<FormType>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSelection = (type: 'client' | 'landowner') => {
    setSelectedType(type);
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const resetSelection = () => {
    setSelectedType(null);
    setFormData(initialFormData);
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        type: selectedType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        ...(selectedType === 'client' 
          ? { message: formData.message }
          : { landAddress: formData.landAddress, landSize: formData.landSize }
        ),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch {
      setSubmitStatus('error');
      setErrorMessage(
        `Sorry, our mailing system is currently unavailable. Please send your inquiry directly to ${CONTACT_INFO.email}`
      );
    }
  };

  // Animation variants for form elements
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { x: "100vw", opacity: 1 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "tween",
        ease: "easeOut",
        duration: 0.5
      }
    },
    exit: { 
      x: "100vw", 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_contact.jpg"
          alt="Background"
          fill
          className="object-cover object-center brightness-[0.4]"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <AnimatePresence mode="wait">
          {selectedType === null ? (
            // Selection View
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
                How can we help you today?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Landowner Option */}
                <button
                  onClick={() => handleSelection('landowner')}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-left hover:bg-white/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Landowners</h3>
                    <p className="text-gray-200 text-lg">
                      I want to sell or invest land for development.
                    </p>
                    <div className="mt-6 inline-flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Get Started <span className="ml-2">→</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-victor-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Client Option */}
                <button
                  onClick={() => handleSelection('client')}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-left hover:bg-white/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Clients</h3>
                    <p className="text-gray-200 text-lg">
                      I am looking for an apartment or commercial space.
                    </p>
                    <div className="mt-6 inline-flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Find Property <span className="ml-2">→</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-victor-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </motion.div>
          ) : submitStatus === 'success' ? (
            // Success View
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h2>
                <p className="text-gray-200 text-lg mb-8">
                  Thank you for reaching out. Our team will get back to you within 24-48 hours.
                </p>
                <button
                  onClick={resetSelection}
                  className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
                >
                  Send Another Inquiry
                </button>
              </div>
            </motion.div>
          ) : (
            // Form View
            <div className="max-w-6xl mx-auto w-full overflow-x-hidden">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={resetSelection}
                className="mb-6 flex items-center text-white/80 hover:text-white transition-colors group text-lg"
              >
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to options
              </motion.button>

              <motion.div 
                className="w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div variants={itemVariants} className="mb-10 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                    {selectedType === 'client' ? 'Find Your Dream Property' : 'Partner With Us'}
                  </h2>
                  <p className="text-gray-200 text-xl">
                    {selectedType === 'client' 
                      ? 'Tell us what you are looking for and we will help you find it.' 
                      : 'Share your land details with us for a potential partnership.'}
                  </p>
                </motion.div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-center"
                  >
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 p-1">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field - Common */}
                    <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
                      <label className="block text-lg font-medium text-white mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-all text-lg"
                        placeholder="John Doe"
                        required
                        disabled={submitStatus === 'loading'}
                      />
                    </motion.div>

                    {/* Email Field - Common */}
                    <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
                      <label className="block text-lg font-medium text-white mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-all text-lg"
                        placeholder="john@example.com"
                        required
                        disabled={submitStatus === 'loading'}
                      />
                    </motion.div>
                  </div>

                  {/* Contact Number - Common */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-lg font-medium text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-all text-lg"
                      placeholder="+880 1XXX XXXXXX"
                      required
                      disabled={submitStatus === 'loading'}
                    />
                  </motion.div>

                  {selectedType === 'landowner' && (
                    <>
                      {/* Land Address - Landowner Only */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-lg font-medium text-white mb-2">Land Address</label>
                        <input
                          type="text"
                          name="landAddress"
                          value={formData.landAddress}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-all text-lg"
                          placeholder="Full address of the property"
                          required
                          disabled={submitStatus === 'loading'}
                        />
                      </motion.div>

                      {/* Land Size - Landowner Only */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-lg font-medium text-white mb-2">Land Size</label>
                        <input
                          type="text"
                          name="landSize"
                          value={formData.landSize}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-all text-lg"
                          placeholder="e.g., 5 Katha, 10 Decimals"
                          required
                          disabled={submitStatus === 'loading'}
                        />
                      </motion.div>
                    </>
                  )}

                  {selectedType === 'client' && (
                    /* Message Field - Client Only */
                    <motion.div variants={itemVariants}>
                      <label className="block text-lg font-medium text-white mb-2">Requirements / Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-all resize-vertical text-lg"
                        placeholder="Describe what you are looking for..."
                        required
                        disabled={submitStatus === 'loading'}
                      ></textarea>
                    </motion.div>
                  )}

                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full bg-white hover:bg-gray-100 text-black font-bold py-5 rounded-xl text-xl transition-all duration-300 mt-6 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      selectedType === 'client' ? 'Send Inquiry' : 'Submit Details'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DualContactForm;
