import Grid from "@mui/material/Grid";
import { CardContainer, cardContainerClasses } from "../About/styles";
import { ContactComponent, contactComponentClasses } from "./styles";

export function Contact() {
  return (
    <ContactComponent>
      <Grid container className={contactComponentClasses.title}>
        Connect with Me
      </Grid>
      <Grid container className={contactComponentClasses.contactContainer}>
        <ContactCard src="mail" name="Email" value="roshanjoffl@gmail.com" />
        <ContactCard src="messenger" name="Messenger" value="Roshan J" />
        <ContactCard src="whatsapp" name="WhatsApp" value="+91 90741 45223" />
      </Grid>
    </ContactComponent>
  );
}

type ContactCardProps = {
  src: string;
  name: string;
  value: string;
};

function ContactCard({ src, name, value }: ContactCardProps) {
  const MailIcon = require("../../assets/png/mail.png");
  const MessengerIcon = require("../../assets/png/messenger.png");
  const WhatsAppIcon = require("../../assets/png/whatsapp.png");
  let IconComponent;
  if (src === "mail") {
    IconComponent = MailIcon;
  } else if (src === "messenger") {
    IconComponent = MessengerIcon;
  } else if (src === "whatsapp") {
    IconComponent = WhatsAppIcon;
  }

  return (
    <CardContainer height={100} width={200}>
      <Grid container className={cardContainerClasses.contactDetailContainer}>
        <Grid item>
          {IconComponent && (
            <img
              src={IconComponent}
              height={40}
              width={40}
              alt={src + "-icon"}
            />
          )}
        </Grid>
        <Grid item>{name}</Grid>
        <Grid item>{value}</Grid>
      </Grid>
    </CardContainer>
  );
}
