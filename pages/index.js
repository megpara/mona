import Head from "next/head";
import styles from "../styles/Home.module.css";

const tickets = [
  {
    date: "THURSDAY 3/3",
    show: "Invited Dress",
    link: "https://store.neonmona.org/collections/neon-cruises/products/volta-in-liquid-light-dance-performance-invited-dress-rehearsal-thursday-3-3-2022",
  },
  {
    date: "FRIDAY 3/4",
    show: "Evening Show",
    link: "https://store.neonmona.org/collections/neon-cruises/products/volta-in-liquid-light-dance-performance",
  },
  {
    date: "SATURDAY 3/5",
    show: "Family Show",
    link: "https://store.neonmona.org/collections/neon-cruises/products/volta-collective-in-liquid-light-family-dance-performance-saturday-3-5-2022",
    soldOut: true,
  },
  {
    date: "SATURDAY 3/5",
    show: "Evening Show",
    link: "https://store.neonmona.org/collections/neon-cruises/products/volta-in-liquid-light-dance-performance-saturday-3-5-2022",
  },
  {
    date: "SUNDAY 3/6",
    show: "Evening Show",
    link: "https://store.neonmona.org/collections/neon-cruises/products/volta-in-liquid-light-dance-performance-sunday-3-6-2022",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VOLTA X MONA</title>
        <meta name="description" content="Volta X Museum of Neon Art" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.subtitle}>
            <a href="https://voltacollective.com">Volta</a> X{" "}
            <a href="https://www.neonmona.org/">Museum of Neon Art</a> Presents
          </div>
          <div className={styles.title}>In Liquid Light</div>
          <div className={styles.description}>
            An in-person, immersive performance in MONA's galleries
          </div>
        </div>
        <div className={styles.heading}>Shows</div>

        <div className={styles.list}>
          {tickets.map((event) => (
            <div key={event} className={styles.listItem}>
              <div className={styles.showText}>
                <div className={styles.date}>{event.date}</div>
                <div className={styles.showType}>{event.show}</div>
              </div>
              {!event.soldOut && (
                <a href={event.link}>
                  <button className={styles.ticketLink}>Tickets</button>
                </a>
              )}
              {event.soldOut && (
                <div
                  style={{
                    fontSize: "12px",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  SOLD OUT
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://voltacollective.com" target="_blank">
          <img className={styles.logo} src="/volta.png" />
        </a>
        <div className={styles.icons}>
          <a target="_blank" href="https://www.instagram.com/volta_collective/">
            <img src="/insta-logo.png" />
          </a>
          <a target="_blank" href="https://vimeo.com/voltacollective">
            <img src="/vimeo-logo-black.png" />
          </a>
          <a target="_blank" href="https://voltacollective.com">
            <img src="/web-simple.jpeg" />
          </a>
        </div>
      </footer>
    </div>
  );
}
