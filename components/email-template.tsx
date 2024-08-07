type EmailTemplateProps = {
  name: string,
  email: string,
  message: string
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => {
  return(
    <div>
      {
        name + "\n" + email + "\n\n" + message
      }
    </div>
  );
}

export default EmailTemplate;
