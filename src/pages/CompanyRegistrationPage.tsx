
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';

// Define form schema
const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Le nom de l'entreprise doit comporter au moins 2 caractères.",
  }),
  category: z.string({
    required_error: "Veuillez sélectionner une catégorie.",
  }),
  description: z.string().min(10, {
    message: "La description doit comporter au moins 10 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phone: z.string().min(8, {
    message: "Veuillez entrer un numéro de téléphone valide.",
  }),
  address: z.string().min(5, {
    message: "L'adresse doit comporter au moins 5 caractères.",
  }),
  website: z.string().url({
    message: "Veuillez entrer une URL valide.",
  }).optional().or(z.literal('')),
  employees: z.string().optional(),
  foundingYear: z.string().regex(/^\d{4}$/, {
    message: "L'année doit être au format YYYY.",
  }).optional().or(z.literal('')),
  registryNumber: z.string().optional(),
  taxId: z.string().optional(),
});

const CompanyRegistrationPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      category: "",
      description: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      employees: "",
      foundingYear: "",
      registryNumber: "",
      taxId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Demande soumise avec succès",
      description: "Nous examinerons votre demande et vous contacterons sous peu.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">{t('Ajouter votre entreprise sur notre plateforme')}</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>{t('Informations générales')}</CardTitle>
                <CardDescription>Informations de base sur votre entreprise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Nom de l\'entreprise')}</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de votre entreprise" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Catégorie')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('Choisir une catégorie')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="architect">{t('Architecte')}</SelectItem>
                          <SelectItem value="builder">{t('Constructeur')}</SelectItem>
                          <SelectItem value="agency">{t('Agence immobilière')}</SelectItem>
                          <SelectItem value="interior">{t('Décorateur d\'intérieur')}</SelectItem>
                          <SelectItem value="expert">{t('Expert immobilier')}</SelectItem>
                          <SelectItem value="bank">{t('Banque')}</SelectItem>
                          <SelectItem value="notary">{t('Notaire')}</SelectItem>
                          <SelectItem value="other">{t('Autre')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Description')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez votre entreprise, vos services, votre expertise..." 
                          className="resize-none min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t('Coordonnées')}</CardTitle>
                <CardDescription>Comment les clients peuvent vous contacter</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('Email')}</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('Téléphone')}</FormLabel>
                        <FormControl>
                          <Input placeholder="+216 xx xxx xxx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Adresse')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Adresse complète de votre entreprise" 
                          className="resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Site web')}</FormLabel>
                      <FormControl>
                        <Input placeholder="https://www.example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t('Informations complémentaires')}</CardTitle>
                <CardDescription>Détails additionnels sur votre entreprise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="employees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('Nombre d\'employés')}</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="foundingYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('Année de création')}</FormLabel>
                        <FormControl>
                          <Input placeholder="YYYY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="registryNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('Numéro de registre de commerce')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="taxId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('Matricule fiscal')}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t('Logo et images')}</CardTitle>
                <CardDescription>Ajoutez des visuels de votre entreprise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <div className="flex flex-col items-center">
                      <Button variant="outline" className="mb-2">
                        {t('Ajouter un logo')}
                      </Button>
                      <p className="text-sm text-gray-500">JPG, PNG ou SVG. Max 2MB.</p>
                    </div>
                  </div>
                  
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <div className="flex flex-col items-center">
                      <Button variant="outline" className="mb-2">
                        {t('Ajouter des images')}
                      </Button>
                      <p className="text-sm text-gray-500">Jusqu'à 5 images. Max 5MB au total.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">{t('Soumettre')}</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CompanyRegistrationPage;
