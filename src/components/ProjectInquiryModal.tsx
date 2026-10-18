import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import ProjectInquiryCard from './ProjectInquiryCard';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0" aria-describedby={undefined}>
        <DialogTitle className="sr-only">Start Your Project</DialogTitle>
        <ProjectInquiryCard />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInquiryModal;
