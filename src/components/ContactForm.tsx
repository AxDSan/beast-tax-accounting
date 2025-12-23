import * as React from "react"

import { useI18n } from "../i18n"

const ContactForm: React.FC = () => {
  const { t } = useI18n()


  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {t.form.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
            placeholder={t.form.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            {t.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
            placeholder={t.form.emailPlaceholder}
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          {t.form.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
          placeholder={t.form.phonePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
          {t.form.service}
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
        >
          <option value="">
            {t.form.selectService}
          </option>
          <option value="individual">
            {t.form.serviceIndividual}
          </option>
          <option value="business">
            {t.form.serviceBusiness}
          </option>
          <option value="corporate">
            {t.form.serviceCorporate}
          </option>
          <option value="planning">
            {t.form.servicePlanning}
          </option>
          <option value="consulting">
            {t.form.serviceConsulting}
          </option>
          <option value="other">
            {t.form.serviceOther}
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          {t.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
          placeholder={t.form.messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-[1.02]"
      >
        {t.form.submit}
      </button>
    </form>
  )
}

export default ContactForm

