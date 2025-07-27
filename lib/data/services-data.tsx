import {
  CalendarDays,
  Clock,
  GraduationCap,
  HandHeart,
  Heart,
  Home,
  Pill,
  Shield,
  Stethoscope,
  User,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react";

export const getCoreServices = (t: any) => [
  {
    icon: <Heart className="w-8 h-8" />,
    title: t("servicesPage.coreServices.painManagement.title"),
    description: t("servicesPage.coreServices.painManagement.description"),
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: t("servicesPage.coreServices.onCallNursing.title"),
    description: t("servicesPage.coreServices.onCallNursing.description"),
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: t("servicesPage.coreServices.personalCare.title"),
    description: t("servicesPage.coreServices.personalCare.description"),
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: t("servicesPage.coreServices.socialWorker.title"),
    description: t("servicesPage.coreServices.socialWorker.description"),
  },
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: t("servicesPage.coreServices.bereavement.title"),
    description: t("servicesPage.coreServices.bereavement.description"),
  },
  {
    icon: <User className="w-8 h-8" />,
    title: t("servicesPage.coreServices.volunteer.title"),
    description: t("servicesPage.coreServices.volunteer.description"),
  },
  {
    icon: <Pill className="w-8 h-8" />,
    title: t("servicesPage.coreServices.medication.title"),
    description: t("servicesPage.coreServices.medication.description"),
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: t("servicesPage.coreServices.equipment.title"),
    description: t("servicesPage.coreServices.equipment.description"),
  },
];

export const getLevelsOfCare = (t: any) => [
  {
    icon: <Home className="w-8 h-8" />,
    title: t("servicesPage.levelsOfCare.routine.title"),
    description: t("servicesPage.levelsOfCare.routine.description"),
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: t("servicesPage.levelsOfCare.continuous.title"),
    description: t("servicesPage.levelsOfCare.continuous.description"),
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: t("servicesPage.levelsOfCare.inpatient.title"),
    description: t("servicesPage.levelsOfCare.inpatient.description"),
  },
  {
    icon: <CalendarDays className="w-8 h-8" />,
    title: t("servicesPage.levelsOfCare.respite.title"),
    description: t("servicesPage.levelsOfCare.respite.description"),
  },
];

export const getTeamMembers = (t: any) => [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: t("servicesPage.team.doctors"),
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: t("servicesPage.team.nurses"),
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: t("servicesPage.team.socialWorkers"),
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: t("servicesPage.team.counselors"),
  },
  {
    icon: <User className="w-6 h-6" />,
    title: t("servicesPage.team.volunteers"),
  },
];
