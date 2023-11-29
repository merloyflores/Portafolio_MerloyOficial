import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { animate, initial, transition } from "../shared/config";
import "../shared/styles/index.scss";
import { MetaHTML } from "../shared/ui/MetaHTML";
import { Wrapper } from "../shared/ui/Wrapper";

const ContactPage: React.FC<PageProps> = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (!toast.isActive("copy-to-clipboard")) {
          toast.success(`${text} Coppied to clipboard!`, {
            toastId: "copy-to-clipboard",
            autoClose: 2000, // Duración en milisegundos (en este caso, 3 segundos)
            position: toast.POSITION.TOP_RIGHT, // Posición de la notificación
            pauseOnHover: false,
            draggable: false,
          });
        }
      })
      .catch((error) => {
        toast.error("Error copying to clipboard:", error);
      });
  };

  return (
    <Wrapper>
      <motion.main
        initial={initial}
        animate={animate}
        transition={transition}
        className="main-contact"
      >
        <ToastContainer />
        <div>
          <h2 className="title"> Contactame </h2>
          <div className="contacts">
            <p
              className="email"
              onClick={() => copyToClipboard("merloy123@gmail.com")}
            >
              <Icon icon="line-md:email-twotone" />
              <span>Email:</span>
              <strong> merloy123@gmail.com </strong>
            </p>
            <p
              className="phone"
              onClick={() => copyToClipboard("+506 7076-7769")}
            >
              <Icon icon="ic:baseline-phone" />
              <span>Phone:</span>
              <strong> +506 7076-7769 </strong>
            </p>
            <p>
              <Icon icon="ant-design:linkedin-outlined" />
              <span>Linkedin:</span>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/merloyflores/"
                rel="noreferrer"
              >
                Merloy Flores
              </a>
            </p>
            <p>
              <Icon icon="bi:whatsapp" />
              <span>Whatsapp:</span>
              <a target="_blank" href="https://wa.link/mgw27t" rel="noreferrer">
                +506 7076-7769
              </a>
            </p>
          </div>
        </div>
      </motion.main>
    </Wrapper>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <MetaHTML>
    <title> Contact me | Merloy Flores </title>
  </MetaHTML>
);
