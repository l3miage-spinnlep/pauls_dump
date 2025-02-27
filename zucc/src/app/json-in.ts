
export interface TourneeEntity{
    idTournee: string;
    status : Status;
    livraisons: LivraisonEntity[];
    journeeEntity: JourneeEntity;
    employees: EmployeeEntity[];
    camion: CamionEntity;
}

export enum Encombrement {
    FAIBLE,
    MOYEN,
    FORT
}

export enum Role {
    PLANIFICATEUR,
    LIVREUR
}

export enum Status{
    PLANIFIE,
    ENCOURS,
    EFFECTUEE
}

export enum EtatClient {
    LIVRE,
    LIVRABLE,
    INSCRIT,
    BLANK
}

export enum StatusCommande {
    OUVERTE,
    PLANIFIER,
    LIVREE,
    NOTEE,
}


export interface EmployeeEntity{
    trigramme:string;
    nom: string;
    prenom: string;
    photo: string;
    telephone: number;
    email:string;
    emploie:Role;
    tournee:TourneeEntity;
}

export interface CamionEntity{
    immatriculation: string;
    code:string;
    type:any;
    tournee:TourneeEntity;
}

export interface LivraisonEntity{
    livraisonId: string;
    status: Status;
    commandes: CommandeEntity[];
    tourneeEntity: TourneeEntity;
}

export interface CommandeEntity{
    idCommande: string;
    statusCommande: StatusCommande;
    dateCommande: Date;
    client: ClientEntity;
    produits: ProduitEntity[];
    livraisonEntity: LivraisonEntity;
}

export interface ClientEntity{
    email: string;
    nom: string;
    prenom:string;
    adresse:string;
    codePostal: number;
    ville:string;
    latitude:number;
    longitude:number;
    etatClient: EtatClient;
    commandeEntities: CommandeEntity[];
}

export interface ProduitEntity{
    reference:string;
    titre:string;
    photo:string;
    description:string;
    prix:number;
    encombrement:Encombrement;
}

export interface JourneeEntity{
    livraisonId: string;
    status: Status;
    dateJournee: Date;
    tourneeListe: TourneeEntity[];
}
