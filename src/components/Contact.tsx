import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    partySize: '2',
    phone: '',
    requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      partySize: '2',
      phone: '',
      requests: ''
    });
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-dragon-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
              Visit
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dragon-orange to-dragon-gold">
                Dragon's Table
              </span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-dragon-orange p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-300">
                    potheri, ktr <br />
                    Food District,603203<br />
                    Near SRM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dragon-red p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">
                    91919191<br />
                    (9292929292
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dragon-gold p-3 rounded-full">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dragon-green p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">
                    info@dragonstable.com<br />
                    reservations@dragonstable.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="text-dragon-orange" size={28} />
              <h3 className="font-display text-2xl font-bold text-dragon-dark">
                Make a Reservation
              </h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent">
                    <option>Select time</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Party Size
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent">
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                    <option>6+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent"
                    placeholder="Your phone number"
                  />
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-slide-up">
              <strong>Success!</strong> Your reservation request has been submitted. We'll contact you shortly to confirm.
            </div>
          )}
              </div>
          <form onSubmit={handleSubmit} className="space-y-6">

                <select 
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent"
                >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent"
                  placeholder="Any special dietary requirements or requests..."
                ></textarea>
              </div>
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required

                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-dragon-orange to-dragon-red text-white py-4 px-6 rounded-lg font-medium text-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Reserve Table
                  name="lastName"
                name="requests"
                value={formData.requests}
                onChange={handleInputChange}
                  value={formData.lastName}
                <select 
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dragon-orange focus:border-transparent"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-dragon-orange to-dragon-red hover:shadow-xl transform hover:scale-105'
              } text-white`}
                  required
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </span>
              ) : (
                'Reserve Table'
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;