import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TeacherComponent } from './components/teacher/teacher.component';
import { RegisterComponent } from './components/register/register.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';
import { WatchVideoComponent } from './components/watch-video/watch-video.component';
import { QuizComponent } from './components/quiz/quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent, RouterLinkActive,RouterLink, ProfileComponent, NavbarComponent,TeacherComponent,RegisterComponent,TeacherProfileComponent,PlaylistComponent,AboutComponent,ContactComponent,CoursesComponent,LoginComponent,UpdateComponent,WatchVideoComponent,QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-learning-management-app';
}
