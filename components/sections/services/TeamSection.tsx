import { Badge } from "@/components/ui/badge";
import { TeamMember } from "@/components/ui/team-member";
import { getTeamMembers } from "@/lib/data/services-data";
import { useTranslations } from "next-intl";

export function TeamSection() {
  const t = useTranslations();
  const teamMembers = getTeamMembers(t);

  return (
    <section className="min-h-[60vh] w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("servicesPage.team.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("servicesPage.team.title")}
            <br />
            <span className="font-semibold text-primary-600">
              {t("servicesPage.team.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("servicesPage.team.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} icon={member.icon} title={member.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
