import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  const featuredCars = [
    {
      id: 1,
      name: 'BMW X5',
      category: 'Premium SUV',
      price: '120',
      image: '/img/0a02827b-43fe-4650-8521-bd1a08e88419.jpg',
      features: ['Автомат', 'Полный привод', 'GPS'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Mercedes C-Class',
      category: 'Бизнес седан',
      price: '95',
      image: '/img/0a02827b-43fe-4650-8521-bd1a08e88419.jpg',
      features: ['Автомат', 'Кожа', 'Климат'],
      rating: 4.9
    },
    {
      id: 3,
      name: 'Audi A4',
      category: 'Комфорт',
      price: '85',
      image: '/img/0a02827b-43fe-4650-8521-bd1a08e88419.jpg',
      features: ['Автомат', 'Bluetooth', 'USB'],
      rating: 4.7
    }
  ];

  const locations = [
    { name: 'Москва Шереметьево', cars: 45, icon: 'Plane' },
    { name: 'Санкт-Петербург Центр', cars: 32, icon: 'MapPin' },
    { name: 'Казань Центр', cars: 28, icon: 'MapPin' },
    { name: 'Сочи Аэропорт', cars: 21, icon: 'Plane' },
    { name: 'Екатеринбург', cars: 18, icon: 'MapPin' },
    { name: 'Нижний Новгород', cars: 15, icon: 'MapPin' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">OlaZuZu</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Пункты выдачи</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              <Button variant="outline" size="sm">Войти</Button>
            </nav>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/img/0a02827b-43fe-4650-8521-bd1a08e88419.jpg')` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Прокат автомобилей
              <span className="block text-secondary">по всему миру</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Более 1000 автомобилей в 150+ городах мира. Бронируйте онлайн за 2 минуты!
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-primary" />
                    Место получения
                  </label>
                  <Input
                    placeholder="Введите город или аэропорт"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-secondary" />
                    Место возврата
                  </label>
                  <Input
                    placeholder="Введите город или аэропорт"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Icon name="Calendar" size={16} className="mr-2 text-primary" />
                    Дата получения
                  </label>
                  <Input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Icon name="Calendar" size={16} className="mr-2 text-secondary" />
                    Дата возврата
                  </label>
                  <Input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto px-12 py-3 text-lg font-semibold">
                <Icon name="Search" size={20} className="mr-2" />
                Найти автомобиль
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные автомобили
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите из нашего флота премиальных автомобилей для комфортного путешествия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <Card key={car.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    {car.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center">
                    <Icon name="Star" size={14} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{car.name}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {car.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">${car.price}</span>
                      <span className="text-gray-500">/день</span>
                    </div>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Пункты выдачи по всему миру
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 150 пунктов выдачи в крупнейших городах и аэропортах мира
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon name={location.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{location.name}</h3>
                        <p className="text-sm text-gray-600">{location.cars} автомобилей</p>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Интерактивная карта</h3>
                <p className="text-gray-600">Найдите ближайший пункт выдачи на карте</p>
                <Button className="mt-4">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Открыть карту
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают OlaZuZu?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы делаем аренду автомобилей простой, быстрой и надёжной
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Полная защита',
                description: 'Комплексное страхование и круглосуточная поддержка'
              },
              {
                icon: 'Clock',
                title: 'Быстрое бронирование',
                description: 'Забронируйте автомобиль за 2 минуты онлайн'
              },
              {
                icon: 'DollarSign',
                title: 'Лучшие цены',
                description: 'Гарантируем лучшие цены на рынке проката'
              },
              {
                icon: 'Star',
                title: 'Высокое качество',
                description: 'Все автомобили проходят техосмотр перед выдачей'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Car" size={32} className="text-secondary" />
                <h3 className="text-2xl font-bold">OlaZuZu</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Ведущий сервис проката автомобилей по всему миру. Путешествуйте с комфортом!
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-secondary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-gray-400 hover:text-secondary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-secondary cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Аренда авто</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Долгосрочная аренда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративные клиенты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Страхование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия аренды</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>info@olazuzu.com</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OlaZuZu. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}