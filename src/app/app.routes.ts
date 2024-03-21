import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { RegisterComponent } from './components/register/register.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { UpdateComponent } from './components/update/update.component';
import { WatchVideoComponent } from './components/watch-video/watch-video.component';
import { QuizComponent } from './components/quiz/quiz.component';


export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'playlist', component: PlaylistComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'teacher-profile', component: TeacherProfileComponent},
    {path: 'update', component: UpdateComponent},
    {path: 'watch-video', component: WatchVideoComponent},
    {path: 'quiz', component: QuizComponent}
];
