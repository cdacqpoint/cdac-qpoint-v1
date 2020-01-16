import { random } from "../_helpers/random";
export default {
    init: () => {
        localStorage.setItem('tags', JSON.stringify([
            {
                _id: random(25),
                name: "DAC",
                desc: "The Post Graduate Diploma in Advanced Computing (PG-DAC) is the flagship programme of ACTS. The course is targeted towards engineers and IT professionals who wish to venture into the domain of advanced computing.",
                url: "../tags/dac/questions",
                totalCount: 2000,
                todaysCount: 150,
                weekCount: 400
            },
            {
                _id: random(25),
                name: "DESD",
                desc: "Realizing the growth of embedded systems in day-to-day life and the need for trained manpower in this promising area, C-DAC has launched a Diploma in Embedded Systems Design (DESD) for Engineers in computers, electronics and IT. ",
                url: "../tags/desd/questions",
                totalCount: 222,
                todaysCount: 10,
                weekCount: 150
            },
            {
                _id: random(25),
                name: "DIOT",
                desc: "This course will enable the student to utilize various Embedded Technologies related to IoT, Sensor Networks, Communication Protocols, Cloud Computing, Accessing Resources and Services needed to perform functions with dynamically changing needs.",
                url: "../tags/diot/questions",
                totalCount: 103,
                todaysCount: 10,
                weekCount: 10
            },
            {
                _id: random(25),
                name: "DBDA",
                desc: "The theoretical and practical mix of the Post Graduate Diploma in Big Data Analytics (PG-DBDA) programme.To explore the fundamental concepts of big data analytics.",
                url: "../tags/dbda/questions",
                totalCount: 93,
                todaysCount: 10,
                weekCount: 20
            },
            {
                _id: random(25),
                name: "DMC",
                desc: "The Post-Graduate Diploma in Mobile Computing (PG-DMC) {erstwhile PG Diploma in Wireless and Mobile Computing (PG-DWiMC)} is one of the pioneering programme of ACTS. The PG-DMC Course is targeted towards the engineers who wish to venture into the domain of Mobile Computing.",
                url: "../tags/dmc/questions",
                totalCount: 10,
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "DVLSI",
                desc: "PG-DVLSI is a pioneering course offered by C-DAC to assist engineers who wish to gain theoretical as well as practical knowledge in the field of Very Large Scale Integration (VLSI) design. It will also prepare them to keep pace with the changing trends of VLSI technology and the requirements of an ever-growing VLSI design industry.",
                url: "../tags/dvlsi/questions",
                totalCount: 10,
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "DITISS",
                desc: "The theoretical and practical mix of the Post Graduate Diploma in IT Infrastructure Systems and Security (PG-DITISS) programme has the following focus: To explore the fundamental concepts of Cyber Security To develop in-depth knowledge and understanding of the Intrusion Detection and Prevention domain. ",
                url: "../tags/ditiss/questions",
                totalCount: 10,
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "DSSD",
                desc: "C-DAC has taken up the challenge to address the need for trained system software development professionals by introducing an in-depth course Post Graduate Diploma in System Software Development (PG DSSD) giving emphasis to secure software design & implementation practices as per the Industry needs.",
                url: "../tags/dssd/questions",
                totalCount: 100,
                todaysCount: 1,
                weekCount: 2
            },
            {
                _id: random(25),
                name: "DBIHI",
                desc: "The importance of Biomedical Engineers in fast growing health-care industry is now well acknowledged and consequently new career options are available to them in health care industries both nationally and internationally. The Post Graduate Diploma in Biomedical Instrumentation and Health Informatics (PG-DBIHI) programme is designed to mold engineers who can serve in health care industry, as well as in companies dealing with medical equipment.",
                url: "../tags/dbihi/questions",
                totalCount: 100,
                todaysCount: 10,
                weekCount: 20
            },
            {
                _id: random(25),
                name: "DHPCSA",
                desc: "The theoretical and practical mix of the HPC System Administration programs has the following objectives: To explore the fundamental concepts of HPC Administration. To learn HPC Clustering, Parallel file system, Data Center Design and HPC Solutions & their applications.",
                totalCount: 1,
                url: "../tags/dhpcsa/questions",
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "Others",
                desc: "Any Other CDAC Courses or a general topic ",
                totalCount: 1000,
                url: "../tags/others/questions",
                todaysCount: 4,
                weekCount: 700
            },
        ]))
    }
}
