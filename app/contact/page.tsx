import { title } from "@/components/primitives";
import ContactForm from "@/components/contact-form";


export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className={title()}>Any questions?</h1>
      <div className="text-center">
        Please feel free to contact me with any queries, questions or thoughts on my projects using the form below
      </div>

      <ContactForm/>
    </div>
  );
}
