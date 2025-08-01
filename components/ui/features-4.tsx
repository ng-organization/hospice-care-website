import { 
  Clock,
  HandHeart,
  Heart,
  Pill,
  User,
  UserCheck,
  Users,
  Wrench,
} from 'lucide-react'
import { useTranslations } from "next-intl";

export function Features() {
    const t = useTranslations();

    const coreServices = [
        {
            icon: <Heart className="size-6" />,
            title: t("servicesPage.coreServices.painManagement.title"),
            description: t("servicesPage.coreServices.painManagement.description"),
        },
        {
            icon: <Clock className="size-6" />,
            title: t("servicesPage.coreServices.onCallNursing.title"),
            description: t("servicesPage.coreServices.onCallNursing.description"),
        },
        {
            icon: <UserCheck className="size-6" />,
            title: t("servicesPage.coreServices.personalCare.title"),
            description: t("servicesPage.coreServices.personalCare.description"),
        },
        {
            icon: <Users className="size-6" />,
            title: t("servicesPage.coreServices.socialWorker.title"),
            description: t("servicesPage.coreServices.socialWorker.description"),
        },
        {
            icon: <HandHeart className="size-6" />,
            title: t("servicesPage.coreServices.bereavement.title"),
            description: t("servicesPage.coreServices.bereavement.description"),
        },
        {
            icon: <User className="size-6" />,
            title: t("servicesPage.coreServices.volunteer.title"),
            description: t("servicesPage.coreServices.volunteer.description"),
        },
        {
            icon: <Pill className="size-6" />,
            title: t("servicesPage.coreServices.medication.title"),
            description: t("servicesPage.coreServices.medication.description"),
        },
        {
            icon: <Wrench className="size-6" />,
            title: t("servicesPage.coreServices.equipment.title"),
            description: t("servicesPage.coreServices.equipment.description"),
        },
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-20">
                <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center md:space-y-16">
                    <h2 className="text-balance text-5xl font-medium lg:text-6xl">
                        {t("servicesPage.overview.title")} {t("servicesPage.overview.titleHighlight")}
                    </h2>
                    <p className="text-lg leading-relaxed">{t("servicesPage.overview.description")}</p>
                </div>

                <div className="relative mx-auto grid max-w-7xl divide-x divide-y border *:p-16 sm:grid-cols-2 lg:grid-cols-4">
                    {coreServices.map((service, index) => (
                        <div key={index} className="space-y-4 group cursor-pointer transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 relative overflow-hidden">
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="transition-colors duration-300 group-hover:text-primary-600">
                                    {service.icon}
                                </span>
                                <h3 className="text-base font-medium transition-colors duration-300 group-hover:text-primary-700">{service.title}</h3>
                            </div>
                            <p className="text-base transition-colors duration-300 group-hover:text-slate-700 relative z-10 leading-relaxed">{service.description}</p>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}