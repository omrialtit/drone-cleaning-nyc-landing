import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';
import { submitIntakeRequest } from '../../firebase';
import { IntakeFormData } from '../../types';

export const IntakeForm: React.FC = () => {
  const [formData, setFormData] = useState<IntakeFormData>({
    address: '',
    service: 'Facade Cleaning',
    timeline: 'ASAP (Urgent)',
    email: '',
    phone: '',
    notes: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const success = await submitIntakeRequest(formData);
    
    if (success) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-lg mx-auto bg-navy-800 border border-accent/20 rounded-lg p-10 text-center animate-fade-in-up">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-accent text-3xl">check_circle</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Request Received</h2>
        <p className="text-gray-400 mb-8">
          Thank you. We have received your assessment request for <span className="text-white">{formData.address}</span>.
          Our team will review the scope and contact you within 1 business day.
        </p>
        <Link to="/">
          <Button variant="outline">Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-navy-800/80 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8 shadow-2xl">
        <div className="space-y-6">
          
          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Property Address <span className="text-accent">*</span>
            </label>
            <input
              required
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Broadway, New York, NY 10001"
              className="w-full bg-navy-900 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Service Needed
              </label>
              <div className="relative">
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-navy-900 border border-white/10 rounded px-4 py-3 text-white appearance-none focus:outline-none focus:border-accent"
                >
                  <option>Facade Cleaning</option>
                  <option>Window Cleaning</option>
                  <option>Soft-Wash</option>
                  <option>Exterior Rinse</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Timeline
              </label>
              <div className="relative">
                <select
                  name="timeline"
                  id="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full bg-navy-900 border border-white/10 rounded px-4 py-3 text-white appearance-none focus:outline-none focus:border-accent"
                >
                  <option>ASAP (Urgent)</option>
                  <option>Next 30 Days</option>
                  <option>Next 90 Days</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Work Email <span className="text-accent">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full bg-navy-900 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Phone <span className="text-gray-600 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(212) 555-0199"
                className="w-full bg-navy-900 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Access restrictions, specific concerns, or safety requirements..."
              className="w-full bg-navy-900 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <Button 
            type="submit" 
            fullWidth 
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Processing...' : 'Submit Site Assessment Request'}
          </Button>

          {status === 'error' && (
             <p className="text-red-400 text-sm text-center">There was an error submitting your request. Please try again.</p>
          )}

          <div className="text-center pt-2">
            <p className="text-xs text-gray-400 mb-2 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              We respond within 1 business day.
            </p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              COI and site safety plan available on request.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
