import { services } from "../../data/services";
import SectionTitle from "../layout/SectionTitle";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="mt-24">
      <SectionTitle label="Domains" title="What I Can Build" />

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
