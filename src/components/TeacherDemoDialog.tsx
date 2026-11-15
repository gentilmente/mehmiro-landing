import { ArrowRight, Play } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface TeacherDemoContent {
  eyebrow: string;
  title: string;
  description: string;
  stageLabel: string;
  stageNote: string;
  stageTitle: string;
  stageHint: string;
  primaryCta: string;
  secondaryCta: string;
}

interface TeacherDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: TeacherDemoContent;
}

const waveBars = [18, 32, 48, 26, 62, 40, 22, 54, 34, 70, 44, 28, 58, 36, 20];

export const TeacherDemoDialog = ({ open, onOpenChange, content }: TeacherDemoDialogProps) => {
  const goToContact = () => {
    window.setTimeout(() => {
      document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="teacher-demo-dialog">
        <div className="teacher-demo-copy">
          <DialogHeader>
            <span className="teacher-demo-eyebrow">{content.eyebrow}</span>
            <DialogTitle>{content.title}</DialogTitle>
            <DialogDescription>{content.description}</DialogDescription>
          </DialogHeader>

          <DialogFooter className="teacher-demo-footer">
            <DialogClose asChild>
              <button type="button" className="teacher-demo-secondary">
                {content.secondaryCta}
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button type="button" className="start-button" onClick={goToContact}>
                {content.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </DialogClose>
          </DialogFooter>
        </div>

        <div className="teacher-demo-stage">
          <div className="teacher-demo-stage-top">
            <span>{content.stageLabel}</span>
            <span className="teacher-demo-badge">{content.stageNote}</span>
          </div>

          <div className="teacher-demo-stage-center">
            <span className="teacher-demo-play" aria-hidden="true">
              <Play className="h-6 w-6" fill="currentColor" />
            </span>
            <strong>{content.stageTitle}</strong>
            <p>{content.stageHint}</p>
            <div className="teacher-demo-wave" aria-hidden="true">
              {waveBars.map((height, index) => (
                <span key={index} style={{ height }} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
