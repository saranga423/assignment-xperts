 //  # nodemailer helper for contact/booking emails
 // server/utils/email.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587", 10),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async (contact) => {
  const info = await transporter.sendMail({
    from: `"Assignment Xpert’s" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New contact message from ${contact.name}`,
    text: `${contact.name} (${contact.email})\n\n${contact.message}\n\nPhone: ${contact.phone || "N/A"}`,
  });
  return info;
};

export const sendBookingEmail = async (booking) => {
  const info = await transporter.sendMail({
    from: `"Assignment Xpert’s" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New booking from ${booking.name}`,
    text: `Booking details:\nName: ${booking.name}\nEmail: ${booking.email}\nService: ${booking.serviceName}\nDate: ${booking.date}\nNotes: ${booking.notes || "N/A"}`,
  });
  return info;
};
