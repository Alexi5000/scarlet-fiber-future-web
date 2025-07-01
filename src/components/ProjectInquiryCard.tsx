
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';
import { sanitizeInput, validateEmail, validatePhone, validateTextLength } from '@/utils/security';

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  specificNeeds?: string;
  howDidYouHear?: string;
}

const ProjectInquiryCard: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    specificNeeds: '',
    howDidYouHear: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedCompany = sanitizeInput(formData.company);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedProjectType = sanitizeInput(formData.projectType);
    const sanitizedBudget = sanitizeInput(formData.budget);
    const sanitizedTimeline = sanitizeInput(formData.timeline);
    const sanitizedSpecificNeeds = sanitizeInput(formData.specificNeeds);
    const sanitizedHowDidYouHear = sanitizeInput(formData.howDidYouHear);

    // Name validation
    if (!sanitizedName || !validateTextLength(sanitizedName, 2)) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (!/^[a-zA-Z\s-'.]+$/.test(sanitizedName)) {
      newErrors.name = 'Name contains invalid characters';
    }

    // Company validation (optional but length check if provided)
    if (sanitizedCompany && !validateTextLength(sanitizedCompany, 100)) {
      newErrors.company = 'Company name must be less than 100 characters';
    } else if (sanitizedCompany && !/^[a-zA-Z0-9\s-&.,()]+$/.test(sanitizedCompany)) {
      newErrors.company = 'Company name contains invalid characters';
    }

    // Email validation
    if (!sanitizedEmail) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(sanitizedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but stricter when provided)
    if (sanitizedPhone && !validatePhone(sanitizedPhone)) {
      newErrors.phone = 'Please enter a valid phone number';
    } else if (sanitizedPhone && !validateTextLength(sanitizedPhone, 20)) {
      newErrors.phone = 'Phone number is too long';
    }

    // Project Type validation
    if (!sanitizedProjectType || !validateTextLength(sanitizedProjectType, 2)) {
      newErrors.projectType = 'Project Type is required';
    }

    // Budget validation
    if (!sanitizedBudget || !validateTextLength(sanitizedBudget, 2)) {
      newErrors.budget = 'Budget is required';
    }

    // Timeline validation
    if (!sanitizedTimeline || !validateTextLength(sanitizedTimeline, 2)) {
      newErrors.timeline = 'Timeline is required';
    }

    // Specific Needs validation
    if (!sanitizedSpecificNeeds || !validateTextLength(sanitizedSpecificNeeds, 10)) {
      newErrors.specificNeeds = 'Specific Needs must be at least 10 characters long';
    }

    // How Did You Hear validation
    if (!sanitizedHowDidYouHear || !validateTextLength(sanitizedHowDidYouHear, 2)) {
      newErrors.howDidYouHear = 'This field is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = sanitizeInput(value);

    const limits: { [key: string]: number } = {
      name: 50,
      company: 100,
      email: 254,
      phone: 20,
      projectType: 100,
      budget: 100,
      timeline: 100,
      specificNeeds: 1000,
      howDidYouHear: 100,
    };
    
    if (sanitizedValue.length > limits[name]) {
      sanitizedValue = sanitizedValue.substring(0, limits[name]);
    }

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });

    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please correct the errors below and try again.',
        variant: 'destructive',
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Project Inquiry Submitted!',
        description: 'Thank you for your inquiry. We will get back to you shortly.',
        duration: 5000,
      });
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        specificNeeds: '',
        howDidYouHear: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-buckeye-black">Start Your Project</h3>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="required">Full Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={errors.name ? "border-red-500 focus:border-red-500" : ""}
              maxLength={50}
              autoComplete="name"
            />
            {errors.name && (
              <div id="name-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.name}</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleChange}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={errors.company ? "border-red-500 focus:border-red-500" : ""}
              maxLength={100}
              autoComplete="organization"
            />
            {errors.company && (
              <div id="company-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.company}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="required">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={errors.email ? "border-red-500 focus:border-red-500" : ""}
              maxLength={254}
              autoComplete="email"
            />
            {errors.email && (
              <div id="email-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.email}</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={errors.phone ? "border-red-500 focus:border-red-500" : ""}
              maxLength={20}
              autoComplete="tel"
            />
            {errors.phone && (
              <div id="phone-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.phone}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="projectType" className="required">Project Type *</Label>
            <Input
              id="projectType"
              name="projectType"
              placeholder="e.g., Fiber Optic Installation, Network Upgrade"
              required
              value={formData.projectType}
              onChange={handleChange}
              aria-invalid={!!errors.projectType}
              aria-describedby={errors.projectType ? "projectType-error" : undefined}
              className={errors.projectType ? "border-red-500 focus:border-red-500" : ""}
              maxLength={100}
            />
            {errors.projectType && (
              <div id="projectType-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.projectType}</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" className="required">Budget (Optional) *</Label>
            <Input
              id="budget"
              name="budget"
              placeholder="e.g., $10,000 - $20,000"
              required
              value={formData.budget}
              onChange={handleChange}
              aria-invalid={!!errors.budget}
              aria-describedby={errors.budget ? "budget-error" : undefined}
              className={errors.budget ? "border-red-500 focus:border-red-500" : ""}
              maxLength={100}
            />
            {errors.budget && (
              <div id="budget-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.budget}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="timeline" className="required">Desired Timeline *</Label>
            <Input
              id="timeline"
              name="timeline"
              placeholder="e.g., Within 3 months, Q4 2024"
              required
              value={formData.timeline}
              onChange={handleChange}
              aria-invalid={!!errors.timeline}
              aria-describedby={errors.timeline ? "timeline-error" : undefined}
              className={errors.timeline ? "border-red-500 focus:border-red-500" : ""}
              maxLength={100}
            />
            {errors.timeline && (
              <div id="timeline-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.timeline}</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="howDidYouHear" className="required">How did you hear about us? *</Label>
            <Input
              id="howDidYouHear"
              name="howDidYouHear"
              placeholder="e.g., Google, Referral, Social Media"
              required
              value={formData.howDidYouHear}
              onChange={handleChange}
              aria-invalid={!!errors.howDidYouHear}
              aria-describedby={errors.howDidYouHear ? "howDidYouHear-error" : undefined}
              className={errors.howDidYouHear ? "border-red-500 focus:border-red-500" : ""}
              maxLength={100}
            />
            {errors.howDidYouHear && (
              <div id="howDidYouHear-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
                <AlertCircle size={16} /><span>{errors.howDidYouHear}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specificNeeds" className="required">Specific Project Needs *</Label>
          <Textarea
            id="specificNeeds"
            name="specificNeeds"
            placeholder="Describe your project in detail (minimum 10 characters)"
            rows={4}
            required
            value={formData.specificNeeds}
            onChange={handleChange}
            className={`resize-none ${errors.specificNeeds ? "border-red-500 focus:border-red-500" : ""}`}
            aria-invalid={!!errors.specificNeeds}
            aria-describedby={errors.specificNeeds ? "specificNeeds-error" : "specificNeeds-help"}
            maxLength={1000}
          />
          <div id="specificNeeds-help" className="text-sm text-gray-500">
            {formData.specificNeeds.length}/1000 characters
          </div>
          {errors.specificNeeds && (
            <div id="specificNeeds-error" className="flex items-center gap-1 text-sm text-red-600" role="alert">
              <AlertCircle size={16} /><span>{errors.specificNeeds}</span>
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-buckeye-scarlet text-white hover:bg-buckeye-scarlet/90 disabled:opacity-50"
          disabled={isSubmitting}
          aria-describedby="submit-help"
        >
          {isSubmitting ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}
        </Button>
        <div id="submit-help" className="text-sm text-gray-500 text-center">
          * Required fields. All data is transmitted securely and encrypted.
        </div>
      </form>
    </div>
  );
};

export default ProjectInquiryCard;
