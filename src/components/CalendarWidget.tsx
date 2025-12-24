import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { theme } from "../theme"

interface TimeSlot {
  time: string
  available: boolean
}

const CalendarWidget: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [step, setStep] = useState(1) // 1: Date, 2: Time, 3: Confirmation
  const [isBooked, setIsBooked] = useState(false)

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    setSelectedDate(clickedDate)
    setStep(2)
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
    setStep(3)
  }

  const handleBooking = () => {
    setIsBooked(true)
  }

  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "01:00 PM", available: true },
    { time: "02:00 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: false },
  ]

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const renderCalendar = () => {
    const days = []
    const totalDays = daysInMonth(currentMonth)
    const firstDay = firstDayOfMonth(currentMonth)

    // Fill in empty slots for the first week
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 w-full"></div>)
    }

    // Fill in the days
    for (let i = 1; i <= totalDays; i++) {
      const isSelected = selectedDate?.getDate() === i && 
                         selectedDate?.getMonth() === currentMonth.getMonth() &&
                         selectedDate?.getFullYear() === currentMonth.getFullYear()
      const isToday = new Date().getDate() === i && 
                      new Date().getMonth() === currentMonth.getMonth() &&
                      new Date().getFullYear() === currentMonth.getFullYear()

      days.push(
        <button
          key={i}
          onClick={() => handleDateClick(i)}
          className={`h-12 w-full flex items-center justify-center rounded-lg transition-all
            ${isSelected ? `${theme.bg} text-white` : "hover:bg-gray-800 text-gray-300"}
            ${isToday && !isSelected ? "border border-red-500/50" : ""}
          `}
        >
          {i}
        </button>
      )
    }

    return days
  }

  if (isBooked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-heading font-normal text-white mb-4">Appointment Confirmed!</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto font-sans">
          Your session for <span className="text-white font-semibold">{selectedDate?.toLocaleDateString()}</span> at <span className="text-white font-semibold">{selectedTime}</span> has been scheduled. We've sent a confirmation to your email.
        </p>
        <button
          onClick={() => {
            setIsBooked(false)
            setStep(1)
            setSelectedDate(null)
            setSelectedTime(null)
          }}
          className={`${theme.bg} ${theme.bgHover} text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg ${theme.shadow}`}
        >
          Schedule Another
        </button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-gray-900/50 p-6 rounded-2xl">
      {/* Left Column: Selection Info */}
      <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0 md:pr-8">
        <div className="mb-8">
          <h4 className="text-red-400 uppercase tracking-widest text-xs font-bold mb-2">Service</h4>
          <h3 className="text-xl text-white font-heading">Initial Consultation</h3>
          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">30 min</span>
          </div>
        </div>

        {selectedDate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <h4 className="text-red-400 uppercase tracking-widest text-xs font-bold mb-2">Date</h4>
            <div className="text-lg text-white font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        )}

        {selectedTime && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <h4 className="text-red-400 uppercase tracking-widest text-xs font-bold mb-2">Time</h4>
            <div className="text-lg text-white font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {selectedTime}
            </div>
          </motion.div>
        )}

        <div className="mt-auto">
          <p className="text-xs text-gray-500 font-sans">
            All times are in your local timezone.
          </p>
        </div>
      </div>

      {/* Right Column: Interactive Area */}
      <div className="w-full md:w-2/3">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-white font-heading">Select a Date</h3>
                <div className="flex gap-2">
                  <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-800 rounded-lg text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={handleNextMonth} className="p-2 hover:bg-gray-800 rounded-lg text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="text-center mb-4 text-gray-400 font-semibold uppercase tracking-wider text-sm">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="text-xs text-gray-600 font-bold h-8 flex items-center justify-center">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <h3 className="text-xl text-white font-heading">Select a Time</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    disabled={!slot.available}
                    onClick={() => handleTimeClick(slot.time)}
                    className={`p-4 rounded-xl border transition-all text-center
                      ${slot.available 
                        ? "border-gray-700 hover:border-red-500 hover:bg-red-500/10 text-white" 
                        : "border-gray-800 text-gray-700 cursor-not-allowed"}
                    `}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(2)} className="text-gray-400 hover:text-white flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <h3 className="text-xl text-white font-heading">Confirm Booking</h3>
              </div>
              
              <div className="space-y-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Service:</span>
                  <span className="text-white font-semibold">Initial Consultation</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white font-semibold">{selectedDate?.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Time:</span>
                  <span className="text-white font-semibold">{selectedTime}</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-700">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white font-semibold">30 Minutes</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1 uppercase tracking-wider font-bold">First Name</label>
                    <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-red-500 outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1 uppercase tracking-wider font-bold">Last Name</label>
                    <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-red-500 outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1 uppercase tracking-wider font-bold">Email Address</label>
                  <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-red-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <button
                  onClick={handleBooking}
                  className={`w-full ${theme.bg} ${theme.bgHover} text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl ${theme.shadow} mt-4`}
                >
                  Schedule Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CalendarWidget

