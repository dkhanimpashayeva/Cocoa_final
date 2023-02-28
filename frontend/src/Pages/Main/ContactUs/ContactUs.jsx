import React from 'react'
import ContactForm from '../../../Companents/Main/Contact/ContactForm/ContactForm'
import ContactHero from '../../../Companents/Main/Contact/ContactHero/ContactHero'
import Contact from '../../../Companents/Main/Contact/ContactWays/Contact'
import ScrollToTop from '../../../Companents/ScrollToTop/ScrollToTop'
const ContactUs = () => {
  return (
    <div>
<ContactHero/>

<Contact/>
<ContactForm/>
<ScrollToTop/>
    </div>
  )
}

export default ContactUs