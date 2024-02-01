import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import AboutUsComponent from "./AboutUsComponent";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutUsComponent
        image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-lindsay-corneille.jpg?h=248&w=206&la=en&hash=2DA200B2FEE7D12B394BFC334B714D80"
        imagetitle="Lindsay Corneille, CFP®"
        list1="Branch Manager"
        list2="Wealth Manager"
        list3="Financial Advisor"
        icon1={<FontAwesomeIcon icon={faEnvelope} />}
        icon2={<FontAwesomeIcon icon={faPhone} />}
        heading1="HOW I CAN HELP YOU"
        paragraph1="Lindsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
        heading2="WHAT MAKES ME KNOWLEDGEABLE"
        paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
        heading3="GETTING TO KNOW ME"
        paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
      />
      <AboutUsComponent
        image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-bill-hartsock.jpg?h=248&w=206&la=en&hash=103D93990E1449876BDEF794A835E6E7"
        imagetitle="William Hartsock, CFP®"
        list1="Wealth Manager"
        icon1={<FontAwesomeIcon icon={faEnvelope} />}
        icon2={<FontAwesomeIcon icon={faPhone} />}
        heading1="HOW I CAN HELP YOU"
        paragraph1="Bill brings broad-based financial knowledge and experience to clients of Family Legacy Wealth Partners, helping them to navigate the financial landscape and pursue their financial goals. He has a deep and broad perspective about what's needed, both financially and emotionally, as clients prepare for and transition to retirement. He's very mindful that retirement is not just about dollars or years, but about priorities and values."
        heading2="WHAT MAKES ME KNOWLEDGEABLE"
        paragraph2="Bill is a former CPA with in-depth understanding of money management strategies, estate and retirement planning strategies, annuities, life insurance, and tax minimization strategies. Bill’s past experience includes working as an auditor at Deloitte & Touche, being a partner at Roney & Company and more. He moved to UBS/Paine Webber in 1996, joined Pat O'Neill at Morgan Stanley in 2010, and then Raymond James in 2018. He has earned the CERTIFIED FINANCIAL PLANNER™ and Certified Public Accountant (CPA) designations."
        heading3="GETTING TO KNOW ME"
        paragraph3="A native of Michigan, Bill is highly involved with his community. He served on the Farmington City Council for 28 years, including four terms as Mayor, and is a former member of the Beaumont Hospital board and American Hospital Association Leadership Committee. Additionally, Bill was the Vice-Chair for the Farmington Hills Economic Development Corporation. He and his wife, Carol, have a son, Christopher, and daughter, Colleen. Bill enjoys spending time with his six grandchildren, participating in outdoor sports, reading and learning to play the piano."
      />
      <AboutUsComponent
        image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-colin-talbot.jpg?h=248&w=206&la=en&hash=44A67EE29CA5D78287A99058C42309D2"
        imagetitle="Colin Talbot"
        list1="Wealth Advisor"
        icon1={<FontAwesomeIcon icon={faEnvelope} />}
        icon2={<FontAwesomeIcon icon={faPhone} />}
        heading1="HOW I CAN HELP YOU"
        paragraph1="Colin’s process is rooted in understanding the priorities of the clients he serves, in order to provide the tailored and timely advice they need to achieve their financial goals. Partnering with his clients through emotional and stressful decisions, Colin emphasizes the importance of understanding the risks, costs, opportunities and impacts of the decisions made in alignment with their values and goals."
        heading2="WHAT MAKES ME KNOWLEDGEABLE"
        paragraph2="After graduating from Michigan State with a degree in finance, Colin joined Edward Jones in 2015—where he gained valuable experience serving client’s and their financial needs. During his time at Edward Jones, Colin was responsible for coaching and leading other advisors joining the industry. The passion he has for growing his knowledge and partnering with clients comes from the first-hand exposure he had to the relationship his parents had with their financial advisor."
        heading3="GETTING TO KNOW ME"
        paragraph3="Colin enjoys spending time with his wife, Ali, and goldendoodle, Lucy. They love spending time in northern Michigan, on the lake or on the golf course. As a former member of the Sparty Mascot program at Michigan State, Colin enjoys taking in MSU sporting events and traveling the BigTen to experience other campuses."
      />
      <AboutUsComponent
        image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-patrick-oneill.jpg?h=248&w=206&la=en&hash=DA8B494EB2AF792AC121168FC6508462"
        imagetitle="Patrick O'Neill, CFP®"
        list1="Investment Executive"
        icon1={<FontAwesomeIcon icon={faEnvelope} />}
        icon2={<FontAwesomeIcon icon={faPhone} />}
        heading1="HOW I CAN HELP YOU"
        paragraph1="As a senior partner in Family Legacy Wealth Partners, Pat looks at investment opportunities and risks through the lens of a large world view. He provides personalized counsel based on each client's needs and draws on his in-depth knowledge—encompassing advisory services, portfolio management, retirement planning and financial planning—to help them achieve each and every one of their goals."
        heading2="WHAT MAKES ME KNOWLEDGEABLE"
        paragraph2="Pat brings more than 35 years of experience to his individual, family and business owner clients. He started out in the investment industry in 1982 as a Financial Advisor with Prescott, Ball & Turben. He joined UBS Paine Webber in 1990 and then moved to Morgan Stanley in 2008. Pat joined Raymond James in 2018. He attended Cleveland State University and has earned the CERTIFIED FINANCIAL PLANNER™ designation."
        heading3="GETTING TO KNOW ME"
        paragraph3="Pat has always been very involved in the local community. As former President for the Plymouth Community Chamber of Commerce and recipient of the Volunteer of the Year and Legacy Awards, he knows the importance of giving back to the community. He is currently on the Board of Directors with the Plymouth Downtown Development Authority. Pat and his girlfriend, Margaret, enjoy traveling, golfing, and spending time with his three daughters and their families."
      />
      <AboutUsComponent
        image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-robin-stack.jpg?h=248&w=206&la=en&hash=78738EB5B0523389727CB4D4016F1A51"
        imagetitle="Robin Stack"
        list1="Registered Associate"
        icon1={<FontAwesomeIcon icon={faEnvelope} />}
        icon2={<FontAwesomeIcon icon={faPhone} />}
        heading1="HOW I CAN HELP YOU"
        paragraph1="As a Registered Associate, Robin partners with our clients to handle the myriad transactional needs that arise on a daily basis. She proactively reaches out to provide appropriate solutions and strives to provide timely, efficient and effective service by helping with account documentation, money movement, IRA distributions and other service-related issues."
        heading2="WHAT MAKES ME KNOWLEDGEABLE"
        paragraph2="Robin joined the team in 2002. She has more than 20 years of experience in the financial industry as well as a thorough understanding of client needs. Robin holds the Series 7, 9, 10 and 66 securities licenses, as well as life and health insurance licenses. Robin holds a bachelor’s degree in economics from University of Michigan- Dearborn."
        heading3="GETTING TO KNOW ME"
        paragraph3="Robin grew up in Canton, Michigan. When she’s not in the office, she enjoys curling up with a good book, bowling, golfing, traveling the world and spending time with out-of-state family members."
      />
      <AboutUsComponent
        image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-deborah-moultrie.jpg?h=248&w=206&la=en&hash=375B438ADD25F911A6ABF175C0289CCF"
        imagetitle="Deborah Moultrie"
        list1="Office Manager"
        icon1={<FontAwesomeIcon icon={faEnvelope} />}
        heading1="HOW I CAN HELP YOU"
        paragraph1="As our office manager, Deborah creates an environment for our clients and team to truly feel comfortable and cared for. She tends to the clients that come into the office as well as assuring they receive stellar service on the phone and for our proactive client contact. She helps us assure our client experience surpasses expectation."
        heading2="WHAT MAKES ME KNOWLEDGEABLE"
        paragraph2="Deborah joined our team in 2022. She has many years of administration and customer service skills and has thorough understanding of customer’s needs and expectations. Her prior experience includes an office manager in the educational system as well as a client service specialist with a local financial services office. Deborah has a Bachelor’s degree from the University of Detroit Mercy."
        heading3="GETTING TO KNOW ME"
        paragraph3="Deborah grew up in Detroit, Michigan. When she’s not in the office, she enjoys concerts, traveling, great food and spending time with family and friends. She always manages to find time to roller skate with her granddaughter!"
      />
      <AboutUsComponent
        image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-shanel-talbert.jpg?h=248&w=206&la=en&hash=B5E221167E396595DC6DF82A978184EF"
        imagetitle="Shanel Talbert"
        list1="Client Communications Associate"
        icon1={<FontAwesomeIcon icon={faEnvelope} />}
        heading1="HOW I CAN HELP YOU"
        paragraph1="Shanel coordinates with the team on client review and report preparation and client follow up and marketing. She designs the quarterly newsletter and assists with our communication efforts to clients and the community."
        heading2="WHAT MAKES ME KNOWLEDGEABLE"
        paragraph2="Shanel joined the team in 2022. Her prior experience includes office management of a real estate office and freelancing as a marketing and social media specialist. Through her experience, she obtained many skills to help Family Legacy Wealth Partners elevate the client experience and how we keep clients updated and informed on their wealth and goals."
        heading3="GETTING TO KNOW ME"
        paragraph3="Shanel grew up in Chandler, Arizona and spent her high school years in Houston, Texas. Outside of work, she enjoys spending time with her husband and their two daughters. They spend their time outdoors as much as they can. In her free time, Shanel is catching up with friends over good food and wine."
      />
    </div>
  );
};

export default AboutUs;
