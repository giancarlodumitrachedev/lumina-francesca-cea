import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getDemoParams } from "@/lib/demo-params";

export const metadata = { title: "Chi Sono | Lumina Psicologo" };

export default async function ChiSonoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  
  const imageUrl = params.isFemale 
    ? "/Assets/psychologist-portrait-f.webp"
    : "/Assets/psychologist-portrait-m.webp";

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Chi Sono
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12 md:mt-16">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image
              src={imageUrl}
              alt={`Ritratto di ${params.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground/80">
            <h2 className="text-3xl font-medium text-primary mb-6">
              {params.name} <span className="text-foreground/50 font-normal">| {params.fieldDisplay}</span>
            </h2>
            <p className="mb-4">
              Ognuno di noi nasce e cresce all&apos;interno di un contesto, caratterizzato fin da subito da relazioni interpersonali che contribuiscono a farci vivere un certo tipo di esperienze e a formare la nostra identità.
            </p>
            <p className="mb-4">
              Da quelle familiari a quelle con gli educatori, passando per amici, partner e colleghi di lavoro: ognuno dei rapporti che viviamo ci forgia e, allo stesso tempo, rispecchia le dinamiche che abbiamo sperimentato fino a quel momento. Anche le emozioni che proviamo e i pensieri che concepiamo sono influenzati dal contesto relazionale in cui siamo cresciuti.
            </p>
            <p className="mb-4">
              Per superare momenti difficili e raggiungere un maggiore benessere bisogna comprendere quali siano gli elementi che non ci rappresentano più e quali i bisogni insoddisfatti su cui lavorare. In base a questo si vanno a individuare le risorse necessarie per farlo, che sono già dentro di noi anche se spesso non ne siamo consapevoli.
            </p>
            <p className="mb-4">
              Il nostro percorso insieme si baserà su accoglienza, ascolto e comprensione e avrà proprio l&apos;obiettivo di accompagnarti verso una nuova interpretazione di ciò che stai sperimentando. Non solo: sviluppando nuovi pensieri e comportamenti, potrai vivere il tuo presente in maniera più soddisfacente e serena.
            </p>
            <p className="mb-8 font-medium">
              Daremo il via a un cammino che ti condurrà su strade mai percorse prima, verso il benessere che desideri.
            </p>

            <h3 className="text-2xl font-medium text-secondary-foreground mb-4">Competenze e Metodologia</h3>
            <p className="mb-4">
              Sono una psicologa di orientamento sistemico-relazionale. Mi occupo di consulenze e sostegno psicologico rivolti a giovani, adulti, coppie e famiglie. La mia professionalità verrà messa a servizio della persona in un luogo sicuro e confortevole nel quale potersi confrontare, raccontare e, soprattutto, venire ascoltati e supportati.
            </p>
            <p className="mb-4">
              Dal 2020 collaboro inoltre con alcuni enti gestori accreditati con il Sistema Sanitario Nazionale per le cure domiciliari.
            </p>
            <p className="mb-4">
              Il percorso terapeutico è un processo di crescita e scoperta di sé che permette di migliorare il benessere emotivo, affrontare difficoltà personali o relazionali e promuovere la crescita personale. In un certo senso, la terapia permette di cocostruire delle &quot;lenti&quot; attraverso cui è possibile adottare una prospettiva diversa e avviare un cambiamento emotivo e relazionale.
            </p>
            <p className="mb-8 font-medium text-primary">
              Sono disponibile per percorsi terapeutici individuali, di coppia e familiari, in presenza o online.
            </p>
            
            <SmartLink
              href="/contatti"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md mt-4 no-underline"
            >
              Prenota un primo colloquio
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
