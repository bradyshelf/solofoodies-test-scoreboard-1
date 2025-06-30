
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface AddRestaurantDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (restaurant: any) => void;
}

const AddRestaurantDialog = ({ isOpen, onClose, onAdd }: AddRestaurantDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: Date.now().toString(),
      ...formData,
      image: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png'
    });
    setFormData({ name: '', handle: '', location: '', description: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Restaurante</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre del Restaurante</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Ej: Mi Restaurante"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="handle">Usuario de Instagram</Label>
            <Input
              id="handle"
              value={formData.handle}
              onChange={(e) => setFormData(prev => ({ ...prev, handle: e.target.value }))}
              placeholder="@mi_restaurante"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="location">Ubicación</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="Madrid, España"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">Descripción (Opcional)</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Breve descripción del restaurante..."
              rows={3}
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Agregar Restaurante
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddRestaurantDialog;
