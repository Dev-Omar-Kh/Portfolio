import React from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import * as Yup from "yup";
import { BiLogoFacebook, BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiLogoWhatsapp, BiMessage, BiUser } from 'react-icons/bi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiMailSendLine } from 'react-icons/ri';

import contactCSS from './contact.module.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { BeatLoader } from 'react-spinners';
import Status from '../../../Components/Status/Status';
import { AnimatePresence, motion } from 'framer-motion';
import Animations from '../../../Animations/Animations';

export default function Contact() {

    const {t, i18n} = useTranslation();

    // ====== social-media-data ====== //

    const socialData = [

        {
            id: 1,
            icon: <BiLogoLinkedin />,
            title: t('socialLinkTitle1'),
            name: 'Omar Khaled',
            url: 'https://www.linkedin.com/in/dev-omar-khaled/'
        },

        {
            id: 2,
            icon: <BiLogoWhatsapp />,
            title: t('socialLinkTitle2'),
            name: '(+20) 1140067845',
            url: 'https://wa.me/+201140067845'
        },

        {
            id: 3,
            icon: <BiLogoFacebook />,
            title: t('socialLinkTitle3'),
            name: 'Omar Khaled',
            url: 'https://www.facebook.com/profile.php?id=100086035253116'
        },

        {
            id: 4,
            icon: <BiLogoGithub />,
            title: t('gitHubWord'),
            name: 'Dev-Omar-Kh',
            url: 'https://github.com/Dev-Omar-Kh'
        },

        {
            id: 5,
            icon: <BiLogoGmail />,
            title: t('socialLinkTitle4'),
            name: 'devomar.2004',
            url: 'mailto:devomar.2004@email.com'
        },

    ];

    // ====== send-message-to-my-email ====== //

    const SERVICE_URL = import.meta.env.VITE_API_URL;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    const values = {
        name: "",
        email: "",
        message: "",
    }

    const submitForm = async (values, { setSubmitting, resetForm, setStatus }) => {
        setStatus(null);
        try {
            const response = await axios.post(SERVICE_URL, {
                service_id: SERVICE_ID,
                template_id: TEMPLATE_ID,
                user_id: USER_ID,
                template_params: {
                    to_name: "Omar Khaled",
                    name: values.name,
                    email: values.email,
                    message: values.message,
                },
            });

            if (response.status === 200) {
                setStatus({ success: "formMsgSuccess" });
                setTimeout(() => {
                    setStatus(null);
                    resetForm();
                }, 2000);
            }
        } catch (error) {
            setStatus({ error: "formMsgError" });
            setTimeout(() => {
                setStatus(null);
            }, 2000);
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    const formikObj = useFormik({

        initialValues: values,

        onSubmit: submitForm,

        validationSchema: Yup.object({

            name: Yup.string()
                .min(3, "nameErrorLength")
                .max(30, "nameErrorLength")
                .required("nameErrorEmpty"),
            email: Yup.string()
                .email("emailErrorInvalid")
                .required("emailErrorEmpty"),
            message: Yup.string()
                .min(10, "msgErrorLength")
                .required("msgErrorEmpty"),

        }),

    });

    // ====== display-status-msg ====== //

    // const [displayStatus, setDisplayStatus] = useState(false);

    return <React.Fragment>

        <AnimatePresence>
            {formikObj.status?.error && <Status resType={false} resMsg={formikObj.status.error} />}
            {formikObj.status?.success && <Status resType={true} resMsg={formikObj.status.success} />}
        </AnimatePresence>

        <motion.section 
            id='contact' className='parents_cont comm_container'
            variants={Animations.parentVariants}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: window.innerWidth <= 768 ? 0.1 : 0.3 }}
        >

            <motion.div variants={Animations.toLeftVariants}>
                <Title title={t('contactMeWord')} />
            </motion.div>

            <div className={contactCSS.contact_cont}>

                <motion.form 
                    className={contactCSS.form_side} 
                    onSubmit={formikObj.handleSubmit}
                    variants={Animations.parentVariants}
                    style={{opacity: formikObj.isSubmitting ? '0.5' : '1'}} 
                >

                    <div className={contactCSS.form_title}>
                        <motion.h3 variants={Animations.toLeftVariants}>{t('formTitle')}</motion.h3>
                        <motion.p variants={Animations.toTopVariants} className={contactCSS.form_slogan}>{t('formSlogan')}</motion.p>
                    </div>

                    <motion.div variants={Animations.toTopVariants} className={contactCSS.input_cont}>

                        {formikObj.touched.name && formikObj.errors.name && (
                            <p className={contactCSS.error_msg}>* {t(formikObj.errors.name)}</p>
                        )}

                        <label className={contactCSS.label} htmlFor="name">
                            <BiUser />
                        </label>

                        <input 
                            id='name' type="text" name='name'
                            placeholder={t('namePlaceHolder')} 
                            value={formikObj.values.name}
                            onChange={(e) => {
                                formikObj.setFieldValue("name", e.target.value);
                            }}
                            onBlur={formikObj.handleBlur}
                        />

                    </motion.div>

                    <motion.div variants={Animations.toTopVariants} className={contactCSS.input_cont}>

                        {formikObj.touched.email && formikObj.errors.email && (
                            <p className={contactCSS.error_msg}>* {t(formikObj.errors.email)}</p>
                        )}

                        <label className={contactCSS.label} htmlFor="email">
                            <MdOutlineAlternateEmail />
                        </label>

                        <input 
                            id='email' type="text" name='email'
                            placeholder={t('emailPlaceHolder')} 
                            value={formikObj.values.email}
                            onChange={(e) => {
                                formikObj.setFieldValue("email", e.target.value);
                            }}
                            onBlur={formikObj.handleBlur}
                        />

                    </motion.div>

                    <motion.div variants={Animations.toTopVariants} className={contactCSS.textarea_cont}>

                        {formikObj.touched.message && formikObj.errors.message && (
                            <p className={contactCSS.error_msg}>* {t(formikObj.errors.message)}</p>
                        )}

                        <label className={contactCSS.area_label} htmlFor="message">
                            <BiMessage />
                        </label>

                        <textarea 
                            id="message" name='message' 
                            placeholder={t('msgPlaceHolder')}
                            value={formikObj.values.message}
                            onChange={(e) => {
                                formikObj.setFieldValue("message", e.target.value);
                            }}
                            onBlur={formikObj.handleBlur}
                        ></textarea>

                    </motion.div>

                    <motion.button 
                        variants={Animations.toTopVariants} 
                        className={contactCSS.submit} type='submit' 
                        disabled={formikObj.isSubmitting || !formikObj.isValid}
                    >
                        {formikObj.isSubmitting ? <BeatLoader size={10} margin={2.5}  color='var(--black-color)' /> : <>
                            {t('sendWord')}
                            <RiMailSendLine />
                        </>}
                    </motion.button>

                </motion.form>

                <motion.div variants={Animations.parentVariants} className={contactCSS.social_side}>

                    <div className={contactCSS.form_title}>
                        <motion.h3 variants={Animations.toLeftVariants}>{t('socialTitle')}</motion.h3>
                        <motion.p variants={Animations.toTopVariants} className={contactCSS.form_slogan}>{t('socialSlogan')}</motion.p>
                    </div>

                    {socialData.map(card => (
                        <motion.a 
                            variants={Animations.toTopVariants} 
                            key={card.id} href={card.url} target='_blank' 
                            className={contactCSS.social_box}
                        >

                            <div className={contactCSS.box_icon}>
                                {card.icon}
                            </div>

                            <div className={contactCSS.box_content}>
                                <h3>{card.title}</h3>
                                <p
                                    dir={card.id === 2 ? (i18n.language == 'ar' ? 'ltr' : '') : ''}
                                    style={card.id === 2 ? (i18n.language === 'ar' ? {textAlign: 'end'} : {}): {}}
                                >{card.name}</p>
                            </div>

                        </motion.a>
                    ))}

                </motion.div>

            </div>

        </motion.section>

    </React.Fragment>

}
