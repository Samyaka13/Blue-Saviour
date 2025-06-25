import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as echarts from 'echarts';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Ticket: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    emergencyContact: '',
    emergencyPhone: '',
    tShirtSize: '',
    specialAccommodations: '',
    liabilityWaiver: false,
    photoConsent: false,
    receiveUpdates: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });

    // Clear error when user checks
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user selects
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!formData.emergencyContact.trim()) {
      errors.emergencyContact = 'Emergency contact is required';
    }

    if (!formData.emergencyPhone.trim()) {
      errors.emergencyPhone = 'Emergency contact phone is required';
    }

    if (!formData.tShirtSize) {
      errors.tShirtSize = 'T-shirt size is required';
    }

    if (!formData.liabilityWaiver) {
      errors.liabilityWaiver = 'You must agree to the liability waiver';
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to the first error
      const firstErrorField = document.querySelector(`[name="${Object.keys(errors)[0]}"]`);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Form is valid, submit
    setFormSubmitted(true);

    // Scroll to confirmation section
    setTimeout(() => {
      const confirmationSection = document.getElementById('confirmation-section');
      if (confirmationSection) {
        confirmationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    // Initialize Weather Forecast Chart
    const weatherChartElement = document.getElementById('weather-chart');
    if (weatherChartElement) {
      const weatherChart = echarts.init(weatherChartElement);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          formatter: function (params: any) {
            const time = params[0].name;
            let result = `${time}<br/>`;
            params.forEach((param: any) => {
              if (param.seriesName === 'Temperature') {
                result += `${param.seriesName}: ${param.value}°F<br/>`;
              } else if (param.seriesName === 'Precipitation') {
                result += `${param.seriesName}: ${param.value}%<br/>`;
              }
            });
            return result;
          }
        },
        legend: {
          data: ['Temperature', 'Precipitation'],
          textStyle: {
            color: '#64748b'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM'],
          axisLabel: {
            color: '#64748b'
          }
        },
        yAxis: [
          {
            type: 'value',
            name: 'Temperature (°F)',
            min: 60,
            max: 80,
            position: 'left',
            axisLabel: {
              formatter: '{value}°F',
              color: '#64748b'
            }
          },
          {
            type: 'value',
            name: 'Precipitation (%)',
            min: 0,
            max: 100,
            position: 'right',
            axisLabel: {
              formatter: '{value}%',
              color: '#64748b'
            }
          }
        ],
        series: [
          {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 0,
            data: [68, 70, 72, 74, 76, 77, 76],
            smooth: true,
            lineStyle: {
              color: '#f59e0b'
            },
            itemStyle: {
              color: '#f59e0b'
            }
          },
          {
            name: 'Precipitation',
            type: 'line',
            yAxisIndex: 1,
            data: [5, 10, 5, 2, 5, 10, 15],
            smooth: true,
            lineStyle: {
              color: '#3b82f6'
            },
            itemStyle: {
              color: '#3b82f6'
            }
          }
        ]
      };
      weatherChart.setOption(option);

      // Handle resize
      window.addEventListener('resize', () => {
        weatherChart.resize();
      });

      return () => {
        weatherChart.dispose();
        window.removeEventListener('resize', () => {
          weatherChart.resize();
        });
      };
    }
  }, []);

  useEffect(() => {
    // Initialize Impact Chart
    const impactChartElement = document.getElementById('impact-chart');
    if (impactChartElement) {
      const impactChart = echarts.init(impactChartElement);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: '#64748b'
          }
        },
        series: [
          {
            name: 'Waste Collection',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 55, name: 'Plastic' },
              { value: 20, name: 'Glass' },
              { value: 15, name: 'Metal' },
              { value: 10, name: 'Other' }
            ]
          }
        ],
        color: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6']
      };
      impactChart.setOption(option);

      // Handle resize
      window.addEventListener('resize', () => {
        impactChart.resize();
      });

      return () => {
        impactChart.dispose();
        window.removeEventListener('resize', () => {
          impactChart.resize();
        });
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center">
              <i className="fa-solid fa-water mr-2"></i>
              <span>Blue-Saviour</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            <a href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/5856ca08-6395-465d-bafe-b28f9160444b" data-readdy="true" className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer">Dashboard</a>
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800 cursor-pointer">Events</a>
            <a href="#" className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer">Impact Hub</a>
            <a href="#" className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer">Rewards</a>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="relative text-slate-600 hover:text-blue-600 cursor-pointer">
              <i className="fa-solid fa-bell text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Avatar className="h-8 w-8 border-2 border-blue-500">
                <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%2520profile%2520picture%2520of%2520a%2520person%2520with%2520a%2520friendly%2520smile%252C%2520blue%2520ocean%2520background%252C%2520high%2520quality%2520portrait%2520photograph%2520with%2520natural%2520lighting%252C%2520clean%2520professional%2520headshot&width=100&height=100&seq=1010&orientation=squarish" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-slate-700 hidden md:inline-block">Bhoomi Sharma</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
        {/* Back Button */}
        <div className="mb-6">
          <a
            href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/5856ca08-6395-465d-bafe-b28f9160444b"
            data-readdy="true"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            <span>Back to Dashboard</span>
          </a>
        </div>

        {!formSubmitted ? (
          <>
            {/* Hero Event Section */}
            <section className="mb-8 sm:mb-12 relative overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-500/80"></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%2520beach%2520cleanup%2520scene%2520with%2520volunteers%2520in%2520blue%2520t-shirts%2520collecting%2520trash%2520along%2520a%2520pristine%2520sandy%2520beach%2520with%2520clear%2520blue%2520ocean%2520waves%252C%2520aerial%2520view%2520showing%2520coastline%2520and%2520organized%2520groups%2520of%2520people%2520working%2520together%252C%2520professional%2520photography%2520with%2520natural%2520lighting&width=1400&height=500&seq=2001&orientation=landscape')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="relative p-4 sm:p-8 md:p-12 text-white">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Versova Beach Cleanup</h1>
                <p className="text-base sm:text-xl mb-4 sm:mb-8 max-w-2xl">Join us for our next beach cleanup event and help create a cleaner, bluer planet for all marine life.</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <i className="fa-solid fa-calendar-days text-2xl mr-3"></i>
                      <div>
                        <div className="text-sm opacity-80">Date</div>
                        <div className="font-medium">June 25, 2025</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <i className="fa-solid fa-clock text-2xl mr-3"></i>
                      <div>
                        <div className="text-sm opacity-80">Time</div>
                        <div className="font-medium">8:00 AM - 12:00 PM</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <i className="fa-solid fa-location-dot text-2xl mr-3"></i>
                      <div>
                        <div className="text-sm opacity-80">Location</div>
                        <div className="font-medium">Versova Beach, Mumbai</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <i className="fa-solid fa-users text-2xl mr-3"></i>
                      <div>
                        <div className="text-sm opacity-80">Participants</div>
                        <div className="font-medium">48 / 75 Registered</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-sm">Beginner Friendly</Badge>
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm">Family Event</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 text-sm">Educational</Badge>
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 text-sm">Earn 250 Points</Badge>
                </div>
              </div>
            </section>

            {/* Event Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-5xl text-slate-800">Event Details</CardTitle>
                    <CardDescription>Everything you need to know about the Versova Beach Cleanup</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2">About This Event</h3>
                      <p className="text-slate-600">
                        Join us for our monthly Versova Beach Cleanup! We'll be focusing on removing plastic waste and microplastics from the shoreline
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2">What to Expect</h3>
                      <ul className="list-disc pl-5 text-slate-600 space-y-1">
                        <li>Brief orientation and safety instructions (8:00 AM)</li>
                        <li>Group assignments and equipment distribution (8:15 AM)</li>
                        <li>Beach cleanup activities (8:30 AM - 11:30 AM)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2">Expected Impact</h3>
                      <div className="grid grid-cols-3 gap-4 ">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <div className="text-blue-600 text-2xl font-bold mb-1">250kg</div>
                          <div className="text-blue-600 text-lg font-bold">Waste Goal</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center font-bold">
                          <div className="text-green-600 text-2xl  mb-1">2 KM</div>
                          <div className="text-green-600 text-lg">Beach Coverage</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 font-bold text-center">
                          <div className="text-purple-600 text-2xl font-bold mb-1">25+</div>
                          <div className="text-purple-600 text-lg " >Marine Animals Saved</div>
                        </div>
                      </div>


                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-5xl text-slate-800">Required Equipment</CardTitle>
                    <CardDescription>What to bring and what will be provided</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium text-slate-800 mb-3">Please Bring</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <i className="fa-solid fa-trash-can text-blue-600"></i>

                            </div>
                            <span className="text-slate-700">Reusable Trash Bags</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <i className="fa-solid fa-hat-cowboy text-blue-600"></i>
                            </div>
                            <span className="text-slate-700">Sun hat or cap</span>
                          </li>

                          <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <i className="fa-solid fa-shoe-prints text-blue-600"></i>
                            </div>
                            <span className="text-slate-700">Closed-toe shoes</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-slate-800 mb-3">We'll Provide</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <i className="fa-solid fa-mitten text-green-600"></i>
                            </div>
                            <span className="text-slate-700">Gloves (reusable)</span>
                          </li>

                          <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <i className="fa-solid fa-hand-holding text-green-600"></i>
                            </div>
                            <span className="text-slate-700">Trash grabbers</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <i className="fa-solid fa-clipboard-list text-green-600"></i>
                            </div>
                            <span className="text-slate-700">Data collection sheets</span>
                          </li>
                          {/* <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <i className="fa-solid fa-cookie-bite text-green-600"></i>
                            </div>
                            <span className="text-slate-700">Light refreshments</span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-5xl text-slate-800">Event Location</CardTitle>
                    <CardDescription>Versova Beach, Mumbai, MH</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-slate-200 h-48 sm:h-64">
                      <img
                        src="https://readdy.ai/api/search-image?query=Aerial%2520map%2520view%2520of%2520Pacific%2520Beach%2520in%2520San%2520Diego%2520showing%2520coastline%252C%2520streets%252C%2520and%2520meeting%2520point%2520marker%252C%2520clear%2520satellite%2520imagery%2520with%2520visible%2520beach%2520access%2520points%2520and%2520parking%2520areas%252C%2520professional%2520map%2520visualization%2520with%2520high%2520detail%2520and%2520clarity&width=400&height=300&seq=2002&orientation=landscape"
                        alt="Map of Versova Beach"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Button variant="outline" className="flex-1 mr-2 border-blue-200 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fa-solid fa-directions mr-2"></i> Directions
                      </Button>
                      <Button variant="outline" className="flex-1 ml-2 border-blue-200 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fa-solid fa-car mr-2"></i> Parking Info
                      </Button>
                    </div>

                    {/* <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-medium text-blue-800 mb-2">Meeting Point</h3>
                      <p className="text-blue-700 text-sm mb-2">We'll meet at the main lifeguard tower at Versova Beach. Look for our blue Blue-Saviour tent and banners.</p>
                      <div className="text-sm text-blue-700">
                        <div className="flex items-center mb-1">
                          <i className="fa-solid fa-map-pin mr-2"></i>
                          <span>700 Grand Ave, Mumbai, MH 92109</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fa-solid fa-bus mr-2"></i>
                          <span>Public transit: Routes 8, 9, and 30</span>
                        </div>
                      </div>
                    </div> */}

                    <div>
                      <h3 className="text-5xl font-bold text-slate-800 mb-2">Tide Guide</h3>
                      <div className="h-36 sm:h-48">
                        <div id="weather-chart" style={{ width: '100%', height: '100%' }}></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-600 mt-2">
                        <div className="flex items-center">
                          <i className="fa-solid fa-temperature-half text-amber-500 mr-1"></i>
                          <span>High: 77°F</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fa-solid fa-cloud-sun text-blue-500 mr-1"></i>
                          <span>Partly Cloudy</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fa-solid fa-wind text-slate-500 mr-1"></i>
                          <span>Wind: 5-10 mph</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration Form Section */}
            <section className="mb-8 sm:mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-5xl text-slate-800">Registration Form</CardTitle>
                  <CardDescription>Please fill out the form below to join the Versova Beach Cleanup</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={formErrors.fullName ? "border-red-500" : ""}
                          />
                          {formErrors.fullName && (
                            <p className="text-red-500 text-sm">{formErrors.fullName}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={formErrors.email ? "border-red-500" : ""}
                          />
                          {formErrors.email && (
                            <p className="text-red-500 text-sm">{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={formErrors.phone ? "border-red-500" : ""}
                          />
                          {formErrors.phone && (
                            <p className="text-red-500 text-sm">{formErrors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="tShirtSize">T-Shirt Size <span className="text-red-500">*</span></Label>
                          <Select
                            onValueChange={(value) => handleSelectChange('tShirtSize', value)}
                            value={formData.tShirtSize}
                          >
                            <SelectTrigger className={formErrors.tShirtSize ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select your t-shirt size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="XS">XS</SelectItem>
                              <SelectItem value="S">S</SelectItem>
                              <SelectItem value="M">M</SelectItem>
                              <SelectItem value="L">L</SelectItem>
                              <SelectItem value="XL">XL</SelectItem>
                              <SelectItem value="XXL">XXL</SelectItem>
                            </SelectContent>
                          </Select>
                          {formErrors.tShirtSize && (
                            <p className="text-red-500 text-sm">{formErrors.tShirtSize}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact">Emergency Contact <span className="text-red-500">*</span></Label>
                          <Input
                            id="emergencyContact"
                            name="emergencyContact"
                            placeholder="Emergency contact name"
                            value={formData.emergencyContact}
                            onChange={handleInputChange}
                            className={formErrors.emergencyContact ? "border-red-500" : ""}
                          />
                          {formErrors.emergencyContact && (
                            <p className="text-red-500 text-sm">{formErrors.emergencyContact}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">Emergency Contact Phone <span className="text-red-500">*</span></Label>
                          <Input
                            id="emergencyPhone"
                            name="emergencyPhone"
                            placeholder="Emergency contact phone"
                            value={formData.emergencyPhone}
                            onChange={handleInputChange}
                            className={formErrors.emergencyPhone ? "border-red-500" : ""}
                          />
                          {formErrors.emergencyPhone && (
                            <p className="text-red-500 text-sm">{formErrors.emergencyPhone}</p>
                          )}
                        </div>
                      </div>



                      <Separator />

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="liabilityWaiver"
                            checked={formData.liabilityWaiver}
                            onCheckedChange={(checked) => handleCheckboxChange('liabilityWaiver', checked as boolean)}
                            className={formErrors.liabilityWaiver ? "border-red-500" : ""}
                          />
                          <div className="space-y-1">
                            <Label htmlFor="liabilityWaiver" className="font-medium">
                              Liability Waiver <span className="text-red-500">*</span>
                            </Label>

                            {formErrors.liabilityWaiver && (
                              <p className="text-red-500 text-sm">{formErrors.liabilityWaiver}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="photoConsent"
                            checked={formData.photoConsent}
                            onCheckedChange={(checked) => handleCheckboxChange('photoConsent', checked as boolean)}
                          />
                          <div className="space-y-1">
                            <Label htmlFor="photoConsent" className="font-medium">
                              Photo Release Consent
                            </Label>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="mt-6 sm:mt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-blue-200 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          <i className="fa-solid fa-user-plus mr-2"></i> Invite Friends
                        </Button>
                        <Button
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* Social Sharing Section */}
            <section className="mb-8 sm:mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Invite Your Friends</CardTitle>
                  <CardDescription>Share this event with your network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                    <Button variant="outline" className="border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fa-solid fa-envelope mr-2 text-blue-600"></i> Email
                    </Button>
                    <Button variant="outline" className="border-green-200 hover:bg-green-50 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fa-brands fa-whatsapp mr-2 text-green-600"></i> WhatsApp
                    </Button>
                    <Button variant="outline" className="border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fa-brands fa-facebook mr-2 text-blue-600"></i> Facebook
                    </Button>
                    <Button variant="outline" className="border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fa-brands fa-twitter mr-2 text-blue-400"></i> Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

          </>
        ) : (
          <>
            {/* Confirmation Section */}
            <section id="confirmation-section" className="mb-8 sm:mb-12">
              <Card className="border-2 border-green-500">
                <CardHeader className="bg-green-50">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fa-solid fa-check text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-green-800">Registration Successful!</CardTitle>
                      <CardDescription className="text-green-700">You're all set for the Versova Beach Cleanup</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <Alert className="bg-blue-50 border-blue-200">
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-info text-blue-600 mr-2 text-lg"></i>
                        <AlertDescription className="text-blue-800">
                          A confirmation email has been sent to {formData.email} with all the event details.
                        </AlertDescription>
                      </div>
                    </Alert>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Your Registration Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Registration ID</span>
                          <span className="text-slate-800 font-medium">PB25062025-{Math.floor(1000 + Math.random() * 9000)}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Name</span>
                          <span className="text-slate-800">{formData.fullName}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Event</span>
                          <span className="text-slate-800">Versova Beach Cleanup</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Date</span>
                          <span className="text-slate-800">June 25, 2025</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Time</span>
                          <span className="text-slate-800">8:00 AM - 12:00 PM</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">T-Shirt Size</span>
                          <span className="text-slate-800">{formData.tShirtSize}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Add to Calendar</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <Button variant="outline" className="border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fa-brands fa-google mr-2 text-blue-600"></i> Google Calendar
                        </Button>
                        <Button variant="outline" className="border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fa-solid fa-calendar-days mr-2 text-blue-600"></i> Apple Calendar
                        </Button>


                      </div>

                      <h3 className="text-lg font-medium text-slate-800 mb-4">Set Reminder</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <RadioGroup defaultValue="day" className="flex">
                            <div className="flex items-center space-x-2 mr-4">
                              <RadioGroupItem value="day" id="day" />
                              <Label htmlFor="day">1 day before</Label>
                            </div>
                            <div className="flex items-center space-x-2 mr-4">
                              <RadioGroupItem value="week" id="week" />
                              <Label htmlFor="week">1 week before</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fa-solid fa-bell mr-2"></i> Set Reminder
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">


                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-slate-800">Safety Instructions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-40 pr-4">
                          <div className="space-y-3 text-sm text-slate-600">
                            <p><span className="font-medium">Always wear gloves</span> when picking up trash.</p>
                            <p><span className="font-medium">Be cautious of sharp objects</span> like broken glass or metal.</p>
                            <p><span className="font-medium">Do not touch</span> medical waste, dead animals, or unknown substances.</p>

                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-slate-800">Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-slate-700 mb-1">Event Coordinator</h4>
                            <div className="flex items-center mb-1">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520female%2520environmental%2520coordinator%2520with%2520short%2520brown%2520hair%2520and%2520friendly%2520smile%252C%2520outdoor%2520setting%2520with%2520ocean%2520in%2520background%252C%2520natural%2520lighting%252C%2520professional%2520portrait%2520photography&width=100&height=100&seq=2003&orientation=squarish" />
                                <AvatarFallback>SM</AvatarFallback>
                              </Avatar>
                              <span className="text-slate-800">Samyak Ajmera</span>
                            </div>
                            <div className="text-sm text-slate-600 ml-10">
                              <div className="flex items-center mb-1">
                                <i className="fa-solid fa-envelope mr-2 text-blue-600"></i>
                                <span>samyak@blue-saviour.org</span>
                              </div>
                              <div className="flex items-center">
                                <i className="fa-solid fa-phone mr-2 text-blue-600"></i>
                                <span>77777777777</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-700 mb-1">Emergency Contact</h4>
                            <div className="text-sm text-slate-600">
                              <div className="flex items-center mb-1">
                                <i className="fa-solid fa-truck-medical mr-2 text-red-600"></i>
                                <span>Emergency Services: 108</span>
                              </div>
                              <div className="flex items-center mb-1">
                                <i className="fa-solid fa-kit-medical mr-2 text-red-600"></i>
                                <span>First Aid Station: Main Tent</span>
                              </div>
                              <div className="flex items-center">
                                <i className="fa-solid fa-hospital mr-2 text-red-600"></i>
                                <span>Nearest Hospital: Mumbai Medical Center (2.5 KM)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <Button
                        variant="outline"
                        className="border-blue-200 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer"
                        onClick={() => window.print()}
                      >
                        <i className="fa-sharp fa-thin fa-head-side-goggles"> Start AR Drive</i>
                      </Button>
                    </div>
                    <div className="mt-3 sm:mt-4 md:mt-0 flex space-x-2 sm:space-x-4">
                      <a
                        href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/5856ca08-6395-465d-bafe-b28f9160444b"
                        data-readdy="true"
                      >
                        <Button
                          variant="outline"
                          className="border-blue-200 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          Return to Dashboard
                        </Button>
                      </a>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Register Another Person
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What to Expect Section */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">What to Expect on Event Day</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Card>
                  <div className="p-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=Volunteers%2520at%2520beach%2520cleanup%2520registration%2520table%2520with%2520blue%2520tent%252C%2520people%2520signing%2520in%2520and%2520receiving%2520equipment%252C%2520organized%2520check-in%2520process%2520with%2520friendly%2520staff%252C%2520morning%2520beach%2520setting%2520with%2520clear%2520blue%2520sky%252C%2520professional%2520event%2520photography&width=400&height=250&seq=2004&orientation=landscape"
                      alt="Check-in process"
                      className="w-full h-48 object-cover object-top rounded-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-slate-800">Check-In Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">
                      Upon arrival, proceed to the registration tent where our team will check you in, provide your t-shirt, and assign you to a cleanup group. You'll receive all necessary equipment and a brief orientation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <div className="p-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=Beach%2520cleanup%2520volunteers%2520working%2520in%2520small%2520groups%2520along%2520shoreline%252C%2520people%2520wearing%2520blue%2520shirts%2520and%2520gloves%2520collecting%2520trash%2520in%2520biodegradable%2520bags%252C%2520organized%2520team%2520effort%2520with%2520clear%2520zone%2520assignments%252C%2520sunny%2520day%2520at%2520beach%252C%2520professional%2520event%2520photography&width=400&height=250&seq=2005&orientation=landscape"
                      alt="Cleanup activities"
                      className="w-full h-48 object-cover object-top rounded-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-slate-800">Cleanup Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">
                      Teams will spread out across designated zones to collect and sort waste. Data cards will help track what you find. Team leaders will guide the process and answer questions throughout the event.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <div className="p-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=Beach%2520cleanup%2520celebration%2520with%2520volunteers%2520gathered%2520around%2520collection%2520point%252C%2520sorted%2520waste%2520bags%2520visible%252C%2520people%2520in%2520blue%2520shirts%2520celebrating%2520successful%2520cleanup%252C%2520refreshment%2520table%2520with%2520snacks%2520and%2520drinks%252C%2520group%2520photo%2520moment%252C%2520professional%2520event%2520photography&width=400&height=250&seq=2006&orientation=landscape"
                      alt="Post-cleanup celebration"
                      className="w-full h-48 object-cover object-top rounded-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-slate-800">Post-Cleanup Celebration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">
                      After the cleanup, we'll gather to sort and weigh collected waste, share our findings, and celebrate our impact. Refreshments will be provided, and we'll take a group photo to commemorate the event.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">More Upcoming Events</h2>
                <a
                  href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/5856ca08-6395-465d-bafe-b28f9160444b"
                  data-readdy="true"
                >
                  <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                    View All Events
                  </Button>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Coral%2520reef%2520protection%2520dive%2520with%2520volunteers%2520in%2520diving%2520gear%2520cleaning%2520up%2520underwater%2520debris%2520near%2520vibrant%2520coral%2520reef%252C%2520crystal%2520clear%2520turquoise%2520water%252C%2520tropical%2520fish%2520swimming%2520around%252C%2520professional%2520underwater%2520photography%2520with%2520natural%2520sunlight%2520filtering%2520through%2520water&width=400&height=250&seq=2007&orientation=landscape"
                      alt="Coral Reef Protection Drive"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-slate-800">Coral Reef Protection Drive</CardTitle>
                    <CardDescription className="flex items-center text-slate-500">
                      <i className="fa-solid fa-calendar-days mr-2"></i> July 2, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-slate-600 mb-2">
                      <i className="fa-solid fa-location-dot mr-2"></i> Miami, FL
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center text-slate-600">
                        <i className="fa-solid fa-users mr-2"></i> 32 volunteers
                      </div>
                      <div className="flex items-center text-green-600">
                        <i className="fa-solid fa-leaf mr-2"></i> Est. 150kg waste
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Harbor%2520cleanup%2520with%2520volunteers%2520in%2520safety%2520vests%2520collecting%2520trash%2520along%2520docks%2520and%2520piers%252C%2520boats%2520in%2520background%252C%2520overcast%2520day%2520with%2520dramatic%2520clouds%252C%2520urban%2520waterfront%2520setting%252C%2520professional%2520photography%2520with%2520natural%2520lighting&width=400&height=250&seq=2008&orientation=landscape"
                      alt="Harbor Cleanup Initiative"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-slate-800">Harbor Cleanup Initiative</CardTitle>
                    <CardDescription className="flex items-center text-slate-500">
                      <i className="fa-solid fa-calendar-days mr-2"></i> July 10, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-slate-600 mb-2">
                      <i className="fa-solid fa-location-dot mr-2"></i> Seattle, WA
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center text-slate-600">
                        <i className="fa-solid fa-users mr-2"></i> 56 volunteers
                      </div>
                      <div className="flex items-center text-green-600">
                        <i className="fa-solid fa-leaf mr-2"></i> Est. 350kg waste
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Coastal%2520wetland%2520restoration%2520project%2520with%2520volunteers%2520planting%2520native%2520grasses%2520and%2520removing%2520invasive%2520species%252C%2520marshy%2520area%2520with%2520water%2520channels%252C%2520people%2520working%2520in%2520groups%2520with%2520planting%2520tools%252C%2520sunny%2520day%2520with%2520blue%2520sky%252C%2520professional%2520environmental%2520photography&width=400&height=250&seq=2009&orientation=landscape"
                      alt="Wetland Restoration Project"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-slate-800">Wetland Restoration Project</CardTitle>
                    <CardDescription className="flex items-center text-slate-500">
                      <i className="fa-solid fa-calendar-days mr-2"></i> July 18, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-slate-600 mb-2">
                      <i className="fa-solid fa-location-dot mr-2"></i> New Orleans, LA
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center text-slate-600">
                        <i className="fa-solid fa-users mr-2"></i> 40 volunteers
                      </div>
                      <div className="flex items-center text-green-600">
                        <i className="fa-solid fa-seedling mr-2"></i> 200 plants
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4 flex items-center">
                <i className="fa-solid fa-water mr-2"></i>
                <span>Blue-Saviour</span>
              </div>
              <p className="text-slate-300 mb-4">Making waves of change for cleaner oceans and a better planet.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
                  <i className="fa-brands fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
                  <i className="fa-brands fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
                  <i className="fa-brands fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Upcoming Events</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Impact Reports</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Partner With Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Ocean Conservation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Cleanup Guidelines</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Educational Materials</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Research Papers</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fa-solid fa-location-dot mt-1 mr-2"></i>
                  <span className="text-slate-300">123 Ocean Avenue, San Francisco, MH 94111</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-envelope mr-2"></i>
                  <a href="mailto:info@bluer-the-better.org" className="text-slate-300 hover:text-white cursor-pointer">info@bluer-the-better.org</a>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-phone mr-2"></i>
                  <a href="tel:+1-800-BLUE-SEA" className="text-slate-300 hover:text-white cursor-pointer">+1-800-BLUE-SEA</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2025 Blue-Saviour. All rights reserved.
            </div>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="text-slate-400 hover:text-white cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white cursor-pointer">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white cursor-pointer">Cookie Policy</a>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 mt-3 sm:mt-4 md:mt-0">
              <span className="text-slate-400">Payment Partners:</span>
              <i className="fa-brands fa-cc-visa text-xl text-slate-300"></i>
              <i className="fa-brands fa-cc-mastercard text-xl text-slate-300"></i>
              <i className="fa-brands fa-paypal text-xl text-slate-300"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ticket;
